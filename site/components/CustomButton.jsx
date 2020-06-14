import styled, { css } from 'styled-components';

const versions = new Map([
  ['clear', css``],
  ['base', css`
    background: ${({theme}) => theme.inputs.primary};
    padding: 8px;
    border-radius: 6px;
    color: #fff;
  `],
])

const CustomButtonWrapper = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 600;
  background: unset;

  ${({version}) => !!version ? versions.get(version) : versions.get('base')}
`;

export const CustomButton = ({children, ...restProps}) => {
  return <CustomButtonWrapper {...restProps}>
    <span>{children}</span>
  </CustomButtonWrapper>
}