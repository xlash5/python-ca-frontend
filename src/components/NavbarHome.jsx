import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import WhiteHeader from './WhiteHeader';
import Palette from '../themes/Palette';
import MyButton from '../components/MyButton';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${Palette.primary};
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
  }
  `
const SmallWhiteText = styled.p`
    font-size: 14px;
    color: ${Palette.whiteText};
    margin-left: 10px;
    font-weight: bold;
    `

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

function NavbarHome({ signOutAction, createPostAction, userMail }) {

    return (
        <NavbarContainer>
            <WhiteHeader>petIT</WhiteHeader>
            <SmallWhiteText>You are logged in as {userMail}</SmallWhiteText>
            <ButtonContainer>
                <MyButton onClick={createPostAction}>Create Post</MyButton>
                <MyButton onClick={signOutAction}>Sign Out</MyButton>
            </ButtonContainer>
        </NavbarContainer>
    )
}

export default NavbarHome;