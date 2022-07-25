import React from "react";


function Login() {
    return <>
        <div class="box">
            <div class="page">
                <div class="header">
                    <a id="login" class="active" href="#login">login</a>
                    <a id="signup" href=".registerVet/.registervet.html">Register as Vet</a>
                    <a id="signup" href=".register/.Register/.contact.html">Register as User</a>
                </div>
                <div id="errorMsg"></div>
                <div class="content">
                    <form class="login" name="loginForm" onsubmit="validateLoginForm()" method="POST">
                        <div class="frist">
                            <label for="logName">Username</label>
                            <input type="text" name="name" id="logName" placeholder="Username" />
                        </div>
                        <div class="frist">
                            <label for="logPassword">Password</label>
                            <input type="password" name="password" id="logPassword" placeholder="Password" />
                        </div>
                        <div id="check">
                            <input type="checkbox" id="remember" />
                            <label for="remember">Remember me</label>
                        </div>
                        <br /><br />
                        <input type="submit" value="Login" />
                        <a href="#">Forgot Password?</a>
                    </form>
                    <form class="signup" name="signupForm" onsubmit="validateSignupForm()" method="POST">
                        <input type="email" name="email" id="signEmail" placeholder="Email" />
                        <input type="text" name="name" id="signName" placeholder="Username" />
                        <input type="password" name="password" id="signPassword" placeholder="Password" /><br />
                        <input type="submit" value="SignUp" />
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Login;