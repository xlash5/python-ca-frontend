import styled from 'styled-components';
import Palette from '../themes/Palette';

export default styled.button`
    background-color: ${Palette.whiteText};
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    &:hover {
        background-color: ${Palette.secondary};
        color: ${Palette.whiteText};
    }
`