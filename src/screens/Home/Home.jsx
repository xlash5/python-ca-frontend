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
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Categories from '../../constants/Categories';

function Home() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);
    const [postText, setPostText] = useState('');
    const storage = getStorage();
    const [modalCategory, setModalCategory] = useState(Categories[0]);
    const [category, setCategory] = useState(Categories[5]);

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

    const onCategoryChange = async (e) => {
        setCategory(e);
        console.log(e);
    }

    const onModalCategoryChange = (e) => {
        setModalCategory(e);
        console.log(e);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
        setSelectedImageUrl(null);
        setModalCategory(Categories[0]);
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
                        <Dropdown
                            options={Categories}
                            onChange={onCategoryChange}
                            value={category}
                            placeholder="Select an option"
                        />
                        <PostCard
                            postedBy={user.email}
                            onLike={() => { console.log('liked') }}
                            likeCount={2}
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
                                <Dropdown
                                    options={Categories.filter((category) => category.label !== 'ALL')}
                                    onChange={onModalCategoryChange}
                                    value={modalCategory}
                                    placeholder="Select an option" />
                                {selectedImageUrl &&
                                    <img
                                        src={selectedImageUrl}
                                        alt="Selected Image"
                                        style={{ width: '100%', marginTop: '10px' }}
                                    />}
                            </Modal.Body>
                            <Modal.Footer>
                                <FileInput
                                    type='file'
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={selectImage} />
                                <MyButton variant="secondary" onClick={handleCloseModal}>
                                    Close
                                </MyButton>
                                <MyButton variant="primary" disabled={(selectedImage && modalCategory && postText) ? false : true} onClick={handleUploadImage}>
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