import React from 'react';

import { Container, CountryInfo, CountryFlag } from './styles';

export default function ListItem({ countries }) {
    return (
        <Container>
            {countries.map((country) => (
                <div className="country" key={country.name}>
                    <CountryFlag flag={country.flag} />
                    <CountryInfo>
                        <h1>{country.name}</h1>

                        <ul>
                            <li>
                                <span>Population:</span>{' '}
                                {country.population.toLocaleString()}
                            </li>
                            <li>
                                <span>Region:</span> {country.region}
                            </li>
                            <li>
                                <span>Capital:</span> {country.capital}
                            </li>
                        </ul>
                    </CountryInfo>
                </div>
            ))}
        </Container>
    );
}
