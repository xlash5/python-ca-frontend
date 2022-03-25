import react from "react";
import "./Login.css"
import { Link } from "react-router-dom";


function login() {
    return (
        <div classname="background">
            <div className="backgroundGradient">
                <></>
                <div className="navbar">
                    <div className="appName">
                        <h1 className="websiteName">Reddit</h1>
                    </div>
                </div>
                <div className="loginForm">
                    <div className="loginUsername">
                        <input type="text" className="username" placeholder="USERNAME" required ></input>
                    </div>
                    <div className="loginPassword">
                        <input type="text" className="password" placeholder="PASSWORD" required ></input>
                    </div>
                    <div className="allLoginButtons">
                        <div className="loginButton">
                            <button className="lgbutton">LOGIN</button>
                        </div>
                        <div className="signUpButton">
                            <Link to="/SignUp">
                                <button className="subutton">SIGN-UP</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;