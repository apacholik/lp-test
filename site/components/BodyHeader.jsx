import styled from 'styled-components';

export const BodyHeader = styled.header`
  z-index: 8000;
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;

  background: ${({theme}) => theme.bodyHead.backgroundColor}
`;