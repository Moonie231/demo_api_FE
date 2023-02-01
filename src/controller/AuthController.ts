import AuthService from "../service/AuthService";


class AuthController {
    private AuthService

    constructor() {
        this.AuthService = AuthService;
    }

    register = async (req, res) => {
        let user = await this.AuthService.register(req.body)
        res.status(201).json(user)
    }

    login = async (req, res) => {
        let user = {
            email : req.body.email,
            password : req.body.password
        }

        let response = await this.AuthService.checkUser(user)
        // console.log(response)
        res.status(200).json(response)
    }

}

export default new AuthController();

