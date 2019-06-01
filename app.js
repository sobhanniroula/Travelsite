let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let postsRouter = require('./routes/posts');


mongoose.connect('mongodb://localhost/travelsite', { useNewUrlParser: true });
app.use(express.json());

let imageStorage = multer.diskStorage({
    destination: (req, file, clbk) => clbk(null, 'public/img'),
    filename: (req, file, clbk) => clbk(null, file.originalname)
})
app.use(multer({storage: imageStorage}).single('imageFile'));

// Here used to be all the routes, which are now transferred to the posts.js file inside routes folder

app.use(express.static('public'));

app.use('/posts', postsRouter);

app.listen(3000, () => console.log('Listening to the server on port 3000...'));