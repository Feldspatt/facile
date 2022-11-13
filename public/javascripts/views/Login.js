import {DefaultView} from "../facile/Components/DefaultView.mjs";

export class Login extends DefaultView{
    static route= "login"

    constructor() {
        super("Login");
        console.log("Login");
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