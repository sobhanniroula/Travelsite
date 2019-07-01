async function getCallbackRequests() {
    return await fetch('https://travelsite-sobhan.herokuapp.com/callback-requests')
                            .then((response) => response.json())
                            .then((data) => data);
}

let requestsBlock = document.querySelector('#v-pills-callback');

requestsBlock.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-remove')) {
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch('https://travelsite-sobhan.herokuapp.com/callback-requests/' + id, {
            method: 'DELETE'
        }).then((resp) => resp.text())
            .then(() => window.history.go());
    }
})