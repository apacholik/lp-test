import styled from 'styled-components';

export const IndexWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  flex-grow: 1;

  > *:first-child {
    @media (max-width: ${({theme}) => theme.size.m}px) {
      margin-right: 0px;
    }

    margin-right: 8px;
  }
`;
