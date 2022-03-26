import styled from 'styled-components';
import Palette from '../themes/Palette';

export default styled.button`
  background: ${props => props.primary ? Palette.secondary : "white"};
  color: ${props => props.primary ? "white" : Palette.secondary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${Palette.secondary};
  border-radius: 3px;
  min-height: 3em;
`;