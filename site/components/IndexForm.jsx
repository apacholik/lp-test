import styled from 'styled-components';

export const IndexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-basis: 30%;

  > * {
    max-width: 250px;
    width: 100%;
  }

  > * + * {
    margin-top: 8px;
  }
`;