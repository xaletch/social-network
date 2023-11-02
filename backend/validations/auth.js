const { body } = require('express-validator');

exports.regValidation = [
    body('name', 'Имя').isLength({min: 2}),
    body('surname', 'Фамилия').isLength({min: 2}),
    body('username', 'Имя пользователя').isLength({min: 5}),
    body('email', 'Неверный формат email').isEmail(),
    body('password', 'Пароль должен содержать в себе минимум 8 символов').isLength({min: 8}),
    body('avatarUrl', 'Ваша аватарка').optional().isURL(),
];