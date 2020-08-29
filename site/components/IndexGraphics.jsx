import styled from 'styled-components';

export const IndexGraphics = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
  top: 0;
  left: 0;
  height: 350px;
  min-width: 300px;

  @media (max-width: ${({theme}) => theme.size.s}px) {
    min-width: auto;
    height: 110.79vw;
  }

  > svg {
    width: 900px;
    height: 350px;
    position: absolute;
    margin-left: -450px;
    left: 50%;
    top: 0;

    @media (max-width: ${({theme}) => theme.size.s}px) {
      width: 285.4vw;
      height: auto;
      margin-left: -142vw;
    }
  }
`;
