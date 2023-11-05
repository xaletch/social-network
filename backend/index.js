const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const { regValidation } = require('./validations/auth.js');

const UserModel = require('./models/User.js');
const CheckAuth = require('./utils/CheckAuth.js');

const { register, login, authMe } = require('./controllers/userController.js')

mongoose
    .connect('mongodb://127.0.0.1:27017/cocial-media')
    .then(() => console.log('УСПЕШНОЕ ПОДКЛЮЧЕНИЕ К БД!'))
    .catch((err) => console.log('УПС...', err))

const PORT=5000;

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home');
});

// РЕГИСТАЦИЯ
app.post('/register', regValidation, register);
// АВТОРИЗАЦИЯ
app.post('/login', login);
// ПРОВЕРКА USER
app.get('/account', CheckAuth, authMe);

app.listen(PORT, (err) => {
    if(err) {
        return console.log(err);
    };

    console.log('Good');
});