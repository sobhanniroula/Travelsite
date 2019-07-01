async function getPosts() {
    return await fetch('0.0.0.0:process.env.PORT/posts')
                            .then((response) => response.json())
                            .then((data) => data);
}