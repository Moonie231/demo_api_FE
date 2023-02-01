import { User } from "../model/user";
import { AppDataSource } from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";

 class AuthService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10)
        return this.userRepository.save(user)
    }

    checkUser = async (user) => {
        try {
            let userCheck = await this.userRepository.find({email: user.email})

            if (!userCheck) {
                return 'Email not found'
            }else {
                let passwordCompare = await bcrypt.compare(user.password, userCheck[0].password)
                console.log(passwordCompare)
                if (!passwordCompare) {
                    return 'Password does not match'
                }else {
                    let payload = {
                        idUser: userCheck[0].idUser,
                        email: userCheck[0].email
                    }
                    return jwt.sign(payload, SECRET, {
                        expiresIn: 36000
                    })
                }
            }
        }catch (e) {
            console.log(e.message)
        }

    }

}
export default new AuthService()