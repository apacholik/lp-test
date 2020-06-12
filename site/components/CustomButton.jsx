import styled from 'styled-components';

const CustomButtonWrapper = styled.button`
  border: none;
  background: ${({theme}) => theme.inputs.primary};
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
`;

export const CustomButton = ({children, ...restProps}) =>
  <CustomButtonWrapper {...restProps}>
    <span>{children}</span>
  </CustomButtonWrapper>