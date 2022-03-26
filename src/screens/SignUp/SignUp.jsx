import react from "react";
import { useNavigate } from "react-router-dom";
import Screen from "../../components/Screen";
import MyButton from "../../components/MyButton";
import Navbar from "../../components/Navbar";
import Card from "../../components/AuthCard";
import MyInput from "../../components/MyInput";
import Row from "../../components/Row";

function signup() {
    const navigate = useNavigate();

    return (
        <Screen>
            <Navbar />
            <Card>
                <MyInput placeholder="Username" type="text" />
                <MyInput placeholder="Password" type="password" />
                <MyInput placeholder="Confirm Password" type="password" />
                <Row>
                    <MyButton>Sign Up</MyButton>
                    <MyButton onClick={() => { navigate('/') }} primary>Go To Login</MyButton>
                </Row>
            </Card>
        </Screen>
    )
}

export default signup