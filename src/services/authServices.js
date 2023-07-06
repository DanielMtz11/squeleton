
const initModels = require('../models/initModels')
const Users = require('../models/users.models');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

require('dotenv').config;
class authServices{
    static async register(user){
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
            
        }
    }

    static async getU(){
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async logIn(credentials){
        try {
            const {email, password} = credentials;
            const user = await Users.findOne({where: {email}});
            if(user){
                const isValid = bcrypt.compareSync(password,  user.password); // true
                console.log(`password:${password}  passUser:${user.password}`);

                console.log(`is: ${isValid}`)
                return isValid ? {isValid, user}: {isValid};
            }

            // return {isValid : false}
        } catch (error) {
            throw error;  
        }
    }

    // static genToken(userData)
    // {
    //     try {
    //     const token = jwt.sing(userData, process.env.JWT_SECRET,{
    //         expiresIn: "10m",
    //         algorithm: "HS512"
    //     }); 
    //     return token;     
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

module.exports = authServices