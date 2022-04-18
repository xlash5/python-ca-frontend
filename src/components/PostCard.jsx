import styled from 'styled-components';
import Palette from '../themes/Palette'
import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import LikeCount from './LikeCount';
import LikeButton from './LikeButton';

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
    @media (max-width: 768px) {
        width: 80vw;
  }
`;

const SmallText = styled.p`
    font-size: 12px;
    color: ${Palette.whiteText};
    margin-top: 10px;
    font-style: italic;
`
const PostImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const WhiteText = styled.p`
    color: ${Palette.whiteText};
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
`

export default function ({ postedBy, onLike, imageUrl, likeCount, disabled, likedAlready, postText }) {
    return (
        <PostDiv>
            <SmallText>posted by {postedBy}</SmallText>
            {
                imageUrl && <PostImage
                    src={imageUrl}
                    alt="post"
                />
            }
            {postText && <WhiteText>{postText}</WhiteText>}
            <ButtonContainer>
                <LikeCount>{likeCount}</LikeCount>
                <LikeButton disabled={disabled} onClick={onLike}>
                    {
                        likedAlready ?
                            <FaThumbsDown color={Palette.primary} /> :
                            <FaThumbsUp color={Palette.primary} />
                    }
                </LikeButton>
            </ButtonContainer>
        </PostDiv>
    )
}