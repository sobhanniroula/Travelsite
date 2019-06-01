let articlesBlock = document.querySelector('.articles');

articlesBlock.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-edit')) {
        let articlesTab = document.getElementById('v-pills-articles');
    articlesTab.classList.remove('show');
    articlesTab.classList.remove('active');
    let updateTab = document.getElementById('v-pills-update-post');
    updateTab.classList.add('show');
    updateTab.classList.add('active');

    }
})
