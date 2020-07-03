const express = require('express');
const db = require('./models');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const AuthController = require('./controllers/auth');

app.use('/auth', AuthController);

app.get('/', (req, res) => {
    return res.json('API running...')
});

db.sequelize.sync().then(() => {
    app.listen(3001, () => console.log('Listening on port 3001') )
})


module.export = app;