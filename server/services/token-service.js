const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token-modle')

class TokenServise{
    generateToken(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, {expiresIn: '30d'});
        return {accessToken, refreshToken}
    }

    async saveToken(userId, refreshToken){
        const tokenData = await tokenModel.findOne({user: userId});

        if (tokenData){
            tokenData.refreshToken == refreshToken
            return tokenData.save()
        }

        const token = tokenModel.create({user: userId, refreshToken})
        return token
    }
}

module.exports = new TokenServise();