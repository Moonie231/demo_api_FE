declare class AuthService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<any>;
}
declare const _default: AuthService;
export default _default;
