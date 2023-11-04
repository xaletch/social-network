const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, '123456789');

            req.userId = decoded._id;

            next();
        }
        catch (err) {
            return res.status(403).json({  
                message: 'Нет доступа в аккаунт'
            })
        }
    } else {
        return res.status(403).json({
            message: 'Нет доступа в аккаунт'
        })
    };
}; 