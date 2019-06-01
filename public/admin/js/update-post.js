{
    let articlesBlock = document.querySelector('.articles');

    articlesBlock.addEventListener('click', async function(e) {
        if(e.target.classList.contains('btn-edit')) {
            let id = e.target.parentNode.parentNode.querySelector('.id').value;
            let postInfo = await fetch('http://localhost:3000/posts/' + id)
                            .then((resp) => resp.json())
                                .then((data) => data)

            let titleInp = document.querySelector('#update-title');
            titleInp.value = postInfo.title;
            let textArea = document.querySelector('#update-text');
            textArea.value = postInfo.text;

            let articlesTab = document.getElementById('v-pills-articles');
            articlesTab.classList.remove('show');
            articlesTab.classList.remove('active');
            let updateTab = document.getElementById('v-pills-update-post');
            updateTab.classList.add('show');
            updateTab.classList.add('active');
        }
    })

}