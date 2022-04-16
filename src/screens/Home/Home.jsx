import React, { useEffect, useState } from 'react';
import Screen from '../../components/Screen'
import NavbarHome from "../../components/NavbarHome";
import { auth } from '../../constants/Firebase';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingAnimation from '../../components/LoadingAnimation'
import PostCard from '../../components/PostCard';
import MyButton from '../../components/MyButton';
import TextArea from '../../components/TextArea';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = "Home";
    }, [])

    // Redirect to login if the user not authenticated
    useEffect(() => {
        if (loading) return;
        if (!user) {
            navigate('/')
        }
    }, [loading])

    const signOutUser = () => {
        signOut(auth).then(() => {
            window.location.reload();
        }).catch((error) => {
            console.error(error);
        });
    }

    const createPost = () => {
        console.log('Creating post');
    }

    const handleUploadImage = () => {
        console.log('Uploading image');
    }

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (

        <Screen>
            {
                !user ? <LoadingAnimation /> :
                    <>
                        <NavbarHome
                            signOutAction={signOutUser}
                            createPostAction={handleShowModal}
                            userMail={user.email}
                            key={user.uid} />
                        <PostCard
                            postedBy={user.email}
                            onLike={() => { console.log('liked') }}
                            imageUrl="https://www.petsittersireland.com/wp-content/uploads/2018/02/Ragdoll-Cat-Blue-Eyes.jpg"
                        />

                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <TextArea
                                    placeholder="Post Content"
                                    type="password"
                                    onChange={(e) => { console.log(e.target.value) }} />
                            </Modal.Body>
                            <Modal.Footer>
                                <MyButton variant="secondary" onClick={handleUploadImage}>
                                    Upload Image
                                </MyButton>
                                <MyButton variant="secondary" onClick={handleCloseModal}>
                                    Close
                                </MyButton>
                                <MyButton variant="primary" onClick={handleCloseModal}>
                                    Save Changes
                                </MyButton>
                            </Modal.Footer>
                        </Modal>
                    </>
            }
        </Screen>
    )
}

export default Home;