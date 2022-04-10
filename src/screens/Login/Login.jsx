import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Screen from "../../components/Screen";
import MyButton from "../../components/MyButton";
import Navbar from "../../components/Navbar";
import Card from "../../components/AuthCard";
import MyInput from "../../components/MyInput";
import Row from "../../components/Row";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../constants/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingAnimation from "../../components/LoadingAnimation";

function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Login";
    }, [])

    // Redirect to home if the user authenticated
    useEffect(() => {
        if (loading) return;
        if (user) {
            navigate('/Home')
        }
    }, [loading])

    const loginUser = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then((u) => {
                console.log(u)
                navigate('/Home')
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <Screen>
            {
                loading ? <LoadingAnimation /> :
                    <>
                        <Navbar />
                        <Card>
                            <h1>{user ? user.email : "No User"}</h1>
                            <MyInput
                                placeholder="Username"
                                type="text"
                                onChange={(e) => { setUsername(e.target.value) }} />
                            <MyInput
                                placeholder="Password"
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }} />
                            <Row>
                                <MyButton
                                    onClick={loginUser}>LOGIN</MyButton>
                                <MyButton
                                    onClick={() => { navigate('/SignUp') }}
                                    primary>Sign Up</MyButton>
                            </Row>
                        </Card>
                    </>
            }
        </Screen>
    );
}

export default login;