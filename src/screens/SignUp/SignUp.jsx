import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Screen from "../../components/Screen";
import MyButton from "../../components/MyButton";
import Navbar from "../../components/Navbar";
import Card from "../../components/AuthCard";
import MyInput from "../../components/MyInput";
import Row from "../../components/Row";
import { auth } from '../../constants/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingAnimation from "../../components/LoadingAnimation";

function signup() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Sign Up";
    }, [])

    // Redirect to home if the user authenticated
    useEffect(() => {
        if (loading) return;
        if (user) {
            navigate('/Home');
        }
    }, [loading])

    const createUser = () => {
        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, mail, password)
            .then((userCredential) => {
                // Signed in successfully.
                navigate('/Home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <Screen>
            {
                loading ? <LoadingAnimation /> :
                    <>
                        <Navbar />
                        <Card>
                            <MyInput
                                placeholder="Mail"
                                type="text"
                                onChange={(e) => { setMail(e.target.value) }} />
                            <MyInput
                                placeholder="Password"
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }} />
                            <MyInput
                                placeholder="Confirm Password"
                                type="password"
                                onChange={(e) => { setRepeatPassword(e.target.value) }} />
                            <Row>
                                <MyButton onClick={createUser}>Sign Up</MyButton>
                                <MyButton onClick={() => { navigate('/') }} primary>Go To Login</MyButton>
                            </Row>
                        </Card>
                    </>
            }
        </Screen>
    )
}

export default signup