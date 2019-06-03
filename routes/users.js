let User = require('../models/users').User;
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let auth = require('../controllers/auth');


router.post('/login', async (req, resp) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({email: email});

    if (user.length > 0) {
        let comparisonResult = await bcrypt.compare(password, user[0].password);
        if (comparisonResult) {
            let token = auth.generateToken(user[0]);
            resp.cookie('auth_token', token);
            resp.send({
                redirectUrl: '/admin'
            });
        } else {
            resp.status(400);
            resp.send('Rejected1');
        }
    } else {
        resp.status(400);
        resp.send('Rejected2');
    }
})

router.post('/register', async (req, resp) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({email: email});
    if (user.length === 0) {
        let encryptedPass = await bcrypt.hash(password, 12);
        // bigger the number, stronger the encryption. 12 is the max value
        let newUser = new User({
            email: email,
            password: encryptedPass
        })
        await newUser.save();
        resp.send('Done');
    } else {
        resp.send('Rejected');
    }
})

module.exports = router;