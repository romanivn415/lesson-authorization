const userService = require("../services/user-service")

class UserController{
    async registration(req, res, next){
        try{
            const {email, password} = req.body
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        }
        catch(e){
            console.log(e.message)
        }
    }
    async login(req, res, next){
        try{

        }
        catch(e){
            console.log(e.message)
        }
    }
    async logout(req, res, next){
        try{

        }
        catch(e){
            console.log(e.message)
        }
    }
    async activate(req, res, next){
        try{

        }
        catch(e){
            console.log(e.message)
        }
    }
    async refresh(req, res, next){
        try{

        }
        catch(e){
            console.log(e.message)
        }
    }
    async getUsers(req, res, next){
        try{
            res.json(['something1', 'something2'])
        }
        catch(e){
            console.log(e.message)
        }
    }
}

module.exports = new UserController()