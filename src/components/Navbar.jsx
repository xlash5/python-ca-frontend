import React from 'react'
import styled from 'styled-components';
import WhiteHeader from './WhiteHeader';
import Palette from '../themes/Palette';

const NavbarContainer = styled.div`
  display: flex;
  background-color: ${Palette.primary};
  padding-left: 20px;
  padding-right: 20px;
  `

const Navbar = () => {
    return (
        <NavbarContainer>
            <WhiteHeader>PETIT</WhiteHeader>
        </NavbarContainer>
    )
}

export default Navbar;