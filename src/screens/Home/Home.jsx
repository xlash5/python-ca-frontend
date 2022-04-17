import React, { useEffect, useState, useRef } from 'react';
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
import FileInput from '../../components/FileInput';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getStorage, ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";

function Home() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);
    const [postText, setPostText] = useState('');
    const storage = getStorage();

    useEffect(() => {
        document.title = "Home";
    }, []);

    // Redirect to login if the user not authenticated
    useEffect(() => {
        if (loading) return;
        if (!user) {
            navigate('/');
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

    const selectImage = (e) => {
        setSelectedImage(e.target.files[0]);
        var reader = new FileReader();
        reader.onload = function (e) {
            setSelectedImageUrl(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleUploadImage = () => {
        const storageRef = ref(storage, `${Date.now()}${user.uid}${selectedImage.name}`);
        uploadBytes(storageRef, selectedImage).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        }).then(() => {
            getDownloadURL(storageRef).then((url) => {
                console.log(url);
            });
        });
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
        setSelectedImageUrl(null);
    };
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
                                    onChange={(e) => { setPostText(e.target.value) }} />
                                {selectedImageUrl &&
                                    <img
                                        src={selectedImageUrl}
                                        alt="Selected Image"
                                        style={{ width: '100%' }}
                                    />}
                            </Modal.Body>
                            <Modal.Footer>
                                <FileInput
                                    type='file' id='file'
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={selectImage} />
                                <MyButton variant="secondary" onClick={handleCloseModal}>
                                    Close
                                </MyButton>
                                <MyButton variant="primary" disabled={selectedImage ? false : true} onClick={handleUploadImage}>
                                    Create Post!
                                </MyButton>
                            </Modal.Footer>
                        </Modal>
                    </>
            }
        </Screen>
    )
}

export default Home;