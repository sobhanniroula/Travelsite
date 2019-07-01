let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let postsRouter = require('./routes/posts');
let callbackRequestsRouter = require('./routes/callback-requests');
let emailsRouter = require('./routes/emails');
let usersRouter = require('./routes/users');
let Post = require('./models/posts').Post;
let auth = require('./controllers/auth');
let cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://dbadmin:mdbadminsobhan@cluster0-gkkhl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
app.use(express.json());

let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/img'),
    filename: (req, file, cb) => cb(null, file.originalname)
})
app.use(multer({storage: imageStorage}).single('imageFile'));

// Here used to be all the routes, which are now transferred to the posts.js file inside routes folder

app.use(express.static('public'));
app.use(cookieParser());

app.use('/posts', postsRouter);
app.use('/callback-requests', callbackRequestsRouter);
app.use('/emails', emailsRouter);
app.use('/users', usersRouter);

app.get('/sight', async (req, resp) => {
    let id = req.query.id;
    let post = await Post.findOne({id: id});
    resp.render('sight', {
        title: post.title,
        imageURL: post.imageURL,
        date: post.date,
        text: post.text
    })
})


app.get('/admin', (req, resp) => {
    let token = req.cookies['auth_token'];
    if(token && auth.checkToken(token)) {
        resp.render('admin');
    } else {
        resp.redirect('/login');
    }
})

app.get('/login', (req, resp) => {
    resp.render('login');
})

app.listen(3000, () => console.log('Listening to the server on port 5000...'));