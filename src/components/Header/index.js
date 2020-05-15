import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { FaMoon, FaRegMoon } from 'react-icons/fa';

import { Container } from './styles';

export default function Header({ toggleTheme }) {
    const { name } = useContext(ThemeContext);

    return (
        <Container>
            <h1>Where in the world?</h1>

            <button type="button" onClick={toggleTheme}>
                {name === 'light' ? (
                    <>
                        <FaRegMoon /> <span>Dark Mode</span>
                    </>
                ) : (
                    <>
                        <FaMoon /> <span>Dark Mode</span>
                    </>
                )}
            </button>
        </Container>
    );
}
