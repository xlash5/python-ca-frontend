import React, { useEffect } from 'react';
import Screen from '../../components/Screen'
import MyButton from '../../components/MyButton';
import { signOut } from "firebase/auth";
import { auth } from '../../constants/Firebase';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingAnimation from '../../components/LoadingAnimation'

function Home() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    // Redirect to login if the user not authenticated
    useEffect(() => {
        if (loading) return;
        if (!user) {
            navigate('/')
        }
    }, [loading])

    const signOutUser = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <Screen>
            {
                loading ? <LoadingAnimation /> :
                    <>
                        <div>Home</div>
                        <h1>{user ? user.email : "none"}</h1>
                        <MyButton onClick={signOutUser}>Log Out</MyButton>
                    </>
            }
        </Screen>
    )
}

export default Home;