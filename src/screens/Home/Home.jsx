import React, { useEffect } from 'react';
import Screen from '../../components/Screen'
import NavbarHome from "../../components/NavbarHome";
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


    return (
        
        <Screen>
            {

                loading ? <LoadingAnimation /> :
                    <>
                        <NavbarHome>
                        </NavbarHome>

                    </>
            }
        </Screen>
    )
}

export default Home;