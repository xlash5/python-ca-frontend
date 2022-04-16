import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import WhiteHeader from './WhiteHeader';
import Palette from '../themes/Palette';
import MyButtonHome from '../components/MyButtonHome';
import CreatePostButon from './CreatePostButon';
import { auth } from '../constants/Firebase';
import { signOut } from "firebase/auth";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const NavbarContainer = styled.div`
  display: flex;
  background-color: ${Palette.primary};
  padding-left: 20px;
  padding-right: 20px;
  `
const SmallWhiteText = styled.p`
    font-size: 12px;
    color: ${Palette.whiteText};
    margin-left: 10px;
    `

function NavbarHome() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const signOutUser = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.error(error);
        });
    }


    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <NavbarContainer>
            <WhiteHeader>PETIT</WhiteHeader>
            <SmallWhiteText>You are logged in as {user.email}</SmallWhiteText>
            <CreatePostButon onClick={handleShow}>Create Post</CreatePostButon>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Create A Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>Some Stuff</Modal.Body>
                <Modal.Footer>
                    <MyButtonHome variant="secondary" onClick={handleClose}>
                        Close
                    </MyButtonHome>
                    <MyButtonHome variant="primary">
                        Upload
                    </MyButtonHome>
                </Modal.Footer>
            </Modal>

            <MyButtonHome onClick={signOutUser}>Log Out</MyButtonHome>

        </NavbarContainer>
    )
}

export default NavbarHome;