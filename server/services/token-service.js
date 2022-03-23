const jwt = require('jsonwebtoken')

class TokenServise{
    generateToken(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, {expiresIn: '30d'});
        return {accessToken, refreshToken}
    }
}

module.exports = new TokenServise();