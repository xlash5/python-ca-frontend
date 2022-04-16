import styled from 'styled-components';
import Palette from '../themes/Palette';

export default styled.button`
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