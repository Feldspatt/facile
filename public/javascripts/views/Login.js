import {View} from "../facile/Components/View.mjs";

export class Login extends View{
    static route= "login"

    constructor() {
        super("Login");
    }


    async getTemplate(){
        return `
            <div class="login">
                <h1>Login</h1>
                <form action="/login" method="post">
                    <input type="text" name="username" placeholder="Username">
                    <input type="password" name="password" placeholder="Password">
                    <input type="submit" value="Login">
                </form>
            </div>
        `;
    }
}