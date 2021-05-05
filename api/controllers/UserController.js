const bcrypt = require('bcrypt');
const UserModel = require('../models/');

class UserController {
    async registerUser(req, res) {
        const user = req.body;

        const encryptPassword = await UserController.generatePassword(user.password);
        
        user['password'] = encryptPassword;
        try {            
            const saveUser = await UserModel.user.create(user);
            res.status(201).json({
                message: 'Usuário regsitrado com sucesso', 
                user:saveUser
            });
        } catch (error) {
            res.status(400).json(error);
        }
    }

    generatePassword(password) {
        const hash = 12;
        return bcrypt.hash(password, hash);
    }
}

module.exports = UserController;