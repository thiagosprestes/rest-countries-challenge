import React from 'react';

import { Container, CountryInfo } from './styles';

export default function ListItem({ countries }) {
    return (
        <Container>
            {countries.map((country) => (
                <CountryInfo>
                    <img src={country.flag} alt={country.name} />
                </CountryInfo>
            ))}
        </Container>
    );
}
