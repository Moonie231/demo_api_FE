declare class AuthController {
    private AuthService;
    constructor();
    register: (req: any, res: any) => Promise<void>;
    login: (req: any, res: any) => Promise<void>;
}
declare const _default: AuthController;
export default _default;
