async function getPosts() {
    return await fetch('process.env.PORT/posts')
                            .then((response) => response.json())
                            .then((data) => data);
}