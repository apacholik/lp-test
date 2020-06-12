import Link from 'next/link';
import styled from 'styled-components';

export const CustomLink = ({ children, target = null, className, ...resProps }) => {
    const { href } = resProps;

    let asProp = null;
    if (href !== '/' && target === null) {
        asProp = `${href}.html`;
    }

    return (<Link as={asProp} {...resProps} passHref><a target={target} className={className}>{children}</a></Link>);
}

export const StyledLink = styled(CustomLink)`
    color: ${({theme}) => theme.colors.normal };
    text-decoration: none;
`