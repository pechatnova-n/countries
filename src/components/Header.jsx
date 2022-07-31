import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {IoMoon, IoMoonOutline} from 'react-icons/io5';
import {Container} from "./Container";
import {Link} from "react-router-dom";
import {Login} from "./Login";

const HeaderEl = styled.header`
     background-color: var(--colors-bg);
     box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled(Link).attrs({
    to: '/'
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const LoginLink = styled(Link).attrs({
    to: "/login"
})`
    color: var(--color-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-decoration: none;
`

const ModeSwitcher = styled.div`
    color: var(--color-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    text-transform: capitalize;
`;


const Header = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }


    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <LoginLink>Login</LoginLink>
                    <ModeSwitcher onClick={changeTheme}>
                        {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}{theme}
                    </ModeSwitcher>
                </Wrapper>
            </Container>

        </HeaderEl>
    );
};

export default Header;