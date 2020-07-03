const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models')

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign In');
});

router.get('/sign-up', async (req, res) => {

    const email = 'teste@teste.com';
    const password = '123456';
    const hash = bcrypt.hashSync(password, saltRounds)
    const result = await Account.create({email, password:  hash});
    res.send(result)
});

module.exports = router;