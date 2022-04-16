import styled from 'styled-components';
import Palette from '../themes/Palette';

export default styled.input`
    background-color: ${Palette.whiteText};
    border: none;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: ${Palette.secondary};
        color: ${Palette.whiteText};
    }
`