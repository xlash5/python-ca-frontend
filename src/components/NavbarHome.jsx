import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import WhiteHeader from './WhiteHeader';
import Palette from '../themes/Palette';
import MyButtonHome from '../components/MyButtonHome';
import CreatePostButon from './CreatePostButon';
import { auth } from '../constants/Firebase';
import { signOut } from "firebase/auth";
import { Modal, Button } from "react-bootstrap";

function NavbarHome(){


const NavbarContainer = styled.div`
  display: flex;
  background-color: ${Palette.primary};
  padding-left: 20px;
  padding-right: 20px;
  `

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
            {/* <h1>{user ? user.email : "none"}</h1> */}
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