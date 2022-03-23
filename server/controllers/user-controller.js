class UserController{
    async registration(req, res, next){
        try{

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