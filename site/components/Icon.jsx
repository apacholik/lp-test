import styled from 'styled-components';

const Svg = styled.svg`
  display: ${(props) => (props.block ? 'block' : 'inline')};
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
  width: 1em;
  height: 1em;
  font-size: 1em;
`;

const Path = styled.path`
  fill: ${(p) => (p.fill ? p.fill : 'currentColor')};
`;

const icons = new Map([
  ['arrow-up', 'M256,101.683L0,410.318h512L256,101.683z M256,164.196l171.043,206.211H84.956L256,164.196z']
])

export const Icon = ({ icon, fill, block, ...restProps } = defaultProps) => (
  <Svg viewBox="0 0 512 512" width="1em" height="1em" block={block} aria-hidden="true" {...restProps}>
    <Path fill={fill} d={icons.get(icon)} />
  </Svg>
);