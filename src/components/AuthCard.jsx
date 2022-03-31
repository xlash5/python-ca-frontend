import styled from 'styled-components';
import Palette from '../themes/Palette'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Palette.whiteText};
  border-radius: 20px;
  width: 40vw;
  margin: 20vh auto;
  padding-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.363) 0px 3px 8px;
  @media (max-width: 768px) {
      width: 90vw;
  }
`;