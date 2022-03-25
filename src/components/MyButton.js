import styled from 'styled-components';

export default styled.button`
  background: ${props => props.primary ? "#8bc6ec" : "white"};
  color: ${props => props.primary ? "white" : "#8bc6ec"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #8bc6ec;
  border-radius: 3px;
`;