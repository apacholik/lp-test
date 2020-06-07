import Link from 'next/link';
import styled from 'styled-components';

export const CustomLink = ({ children, className, ...resProps }) =>
    (<Link {...resProps} passHref><a className={className}>{children}</a></Link>);

export const StyledLink = styled(CustomLink)`
    color: ${({theme}) => theme.colors.normal };
    text-decoration: none;
`