import react from "react";
import "./SignUp.css"

function signup() {
    return (
        <div className="background">
            <div className="backgroundGradient">
                <div className="navbar">
                    <div className="appName">
                        <h1 className="websiteName">Reddit</h1>
                    </div>
                </div>
                <div className="signUpForm">
                    <div className="signUpUsername">
                        <input type="text" className="username" placeholder="USERNAME" required ></input>
                    </div>
                    <div className="signUpPassword">
                        <input type="text" className="password" placeholder="PASSWORD" required ></input>
                    </div>
                    <div className="signUpConfirmPassword">
                        <input type="text" className="confirmPassword" placeholder="CONFIRM PASSWORD" required ></input>
                    </div>
                    <div className="allSignUpButtons">
                        <div className="signUpFormButton">
                            <button className="sufbutton">SIGN-UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup