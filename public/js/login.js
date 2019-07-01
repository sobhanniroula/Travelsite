let signInForm = document.querySelector('.sign-in-form');
let registerForm = document.querySelector('.register-form');

signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('sign-in-email').value;
    let password = document.getElementById('sign-in-password').value;
    fetch('https://travelsite-sobhan.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((resp) => {
        if(resp.status === 400) {
            return new Error();
        }
        return resp.json();
    }).then((data) => {
        window.location.href = data.redirectUrl;
    }).catch(() => alert('Wrong Email or Password!!'));
})

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let rePassword = document.getElementById('register-re-enter-password').value;
    if(password !== rePassword) {
        return;
    }
    fetch('https://travelsite-sobhan.herokuapp.com/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((resp) => resp.text()).then((data) => alert(data));
})