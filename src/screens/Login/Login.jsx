import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Screen from "../../components/Screen";
import MyButton from "../../components/MyButton";
import Navbar from "../../components/Navbar";
import Card from "../../components/AuthCard";
import MyInput from "../../components/MyInput";
import Row from "../../components/Row";


function login() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Login"
    }, [])

    return (
        <Screen>
            <Navbar />
            <Card>
                <MyInput placeholder="Username" type="text" />
                <MyInput placeholder="Password" type="password" />
                <Row>
                    <MyButton>LOGIN</MyButton>
                    <MyButton onClick={() => { navigate('/SignUp') }} primary>Sign Up</MyButton>
                </Row>
            </Card>
        </Screen>
    );
}

export default login;