import styled from 'styled-components';

export const BodyHeader = styled.header`
  z-index: 8000;
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
  padding: 0px 16px;

  background: ${({theme}) => theme.bodyHead.backgroundColor}
`;