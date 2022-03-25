import react from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import Screen from "../../components/Screen";
import MyButton from "../../components/MyButton";


function login() {
    const navigate = useNavigate();

    return (
        <Screen>
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
                    <MyButton>LOGIN</MyButton>
                    <MyButton onClick={() => { navigate('/SignUp') }} primary>SignUp</MyButton>
                </div>
            </div>
        </Screen>
    );
}

export default login;