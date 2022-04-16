import styled from 'styled-components';
import Palette from '../themes/Palette'
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Palette.primary};
    border-radius: 20px;
    width: 40vw;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.363) 0px 3px 8px;
    word-wrap: break-word;
    padding-left: 20px;
    padding-right: 20px;
`;

const SmallText = styled.p`
    font-size: 12px;
    color: ${Palette.whiteText};
`
const PostImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`

const LikeButton = styled.button`
    background-color: ${Palette.whiteText};
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: ${Palette.secondary};
        color: ${Palette.whiteText};
    }
`

const LikeCount = styled.p`
    font-size: 12px;
    color: ${Palette.whiteText};
    margin-bottom: 10px;
    background-color: ${Palette.secondary};
    border-radius: 20px;
    padding: 5px;
    width: 30px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ({ postedBy }) {
    return (
        <PostDiv>
            <SmallText>posted by {postedBy}</SmallText>
            <PostImage
                src={'https://www.petsittersireland.com/wp-content/uploads/2018/02/Ragdoll-Cat-Blue-Eyes.jpg'}
                alt="post"
            />
            <ButtonContainer>
                <LikeButton><FaThumbsUp color={Palette.primary} /></LikeButton>
                <LikeCount>55</LikeCount>
            </ButtonContainer>
        </PostDiv>
    )
}