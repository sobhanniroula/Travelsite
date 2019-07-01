async function getEmails() {
    return await fetch('https://travelsite-sobhan.herokuapp.com/emails')
                            .then((response) => response.json())
                            .then((data) => data);
}


let emailsBlock = document.querySelector('#v-pills-mails');

emailsBlock.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-remove')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('https://travelsite-sobhan.herokuapp.com/emails/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text())
            .then(() => window.history.go());
    }
})