const express = require('express');
const app = express();

const AuthController = require('./controllers/auth');

app.use('/auth', AuthController);

app.get('/', (req, res) => {
    return res.json('API running...')
});

app.listen(3001, () => console.log('Listening on port 3001') )

module.export = app;