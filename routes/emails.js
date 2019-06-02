let Email = require('../models/emails').Email;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

router.get('/', async (req, resp) => {
    resp.send(await Email.find());
});

router.post('/'), async (req, resp) => {
    let reqBody = req.body;
    let newEmail = new Email({
        id: uniqid(),
        name: reqBody.name,
        text: reqBody.text,
        email: reqBody.email,
        date: new Date()
    })
    await newEmail.save();
    resp.send('Accepted Email contact');
};

router.delete('/:id'), async (req, resp) => {
    await Email.deleteOne({id: req.params.id});
    resp.send('Deleted Email');
};

module.exports = router;