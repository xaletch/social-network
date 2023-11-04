const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const UserModel = require('../models/User.js');

exports.register = async (req, res) => {
    try {
        const err = validationResult(req);

        if (!err.isEmpty()) {
            return res.status(400).json(err.array());
        };
    
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const pasHash = await bcrypt.hash(password, salt);
    
        const doc = new UserModel({
            name: req.body.name,
            username: req.body.username,
            surname: req.body.surname,
            email: req.body.email,
            passwordHash: pasHash,
            avatarUrl: req.body.avatarUrl,
        });
    
        const user = await doc.save();
    
        const token = jwt.sign({
            _id: user._id
        }, '123456789', {expiresIn: '30d'})


        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token
        });
    }
    catch (err) {
        console.log('REGISTER ERROR', err);
        res.status(500).json({
           message: 'При регистрации произошла ошибка, повторите попытку', 
        });
    };
};

exports.login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).json({message: 'Неверный логин или пароль'});
        };

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if (!isValidPass) {
            return res.status(400).json({message: 'Неверный логин или пароль'});
        };

        const token = jwt.sign({
            _id: user._id
        }, '123456789', {expiresIn: '30d'});

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token
        });
    }
    catch (err) {
        console.error('LOGIN ERROR', err);
        res.status(400).json({
           message: 'При авторизации произошла ошибка, повторите попытку', 
        });
    };
};

exports.authMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            });
        };

        const { passwordHash, ...userData } = user._doc;

        res.json(userData);
    }
    catch (err) {
        console.error('ME ACCOUNT', err);
        res.status(500).json({
           message: 'Ошибка при входе в аккаунт', 
        });
    }
}