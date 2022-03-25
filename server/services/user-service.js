const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenServise = require('../services/token-service');
const UserDto = require('../dtos/user-dto')

class UserService{
    async registration(email, password){
        const candidate = await UserModel.findOne({email});

        if (candidate ) throw new Error(`User with email ${email} already exists`)

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, process.env.API_URL + '/api/activate/' + activationLink)

        const payload = new UserDto(user)
        const token = tokenServise.generateToken({...payload})

        await tokenServise.saveToken(payload.id, token.refreshToken)

        return {...token, user: payload}
    }
};

module.exports = new UserService();