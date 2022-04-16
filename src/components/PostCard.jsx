import styled from 'styled-components';
import Palette from '../themes/Palette'
import React from 'react';

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Palette.primary};
    border-radius: 20px;
    width: 40vw;
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.363) 0px 3px 8px;
`;

export default function ({ postedBy }) {
    return (
        <PostDiv>
            <h1>
                posted by {postedBy}
            </h1>
        </PostDiv>
    )
}