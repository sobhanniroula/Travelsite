async function getPosts() {
    return await fetch('https://travelsite-sobhan.herokuapp.com/posts')
                            .then((response) => response.json())
                            .then((data) => data);
}