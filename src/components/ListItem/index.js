import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CountryInfo, CountryFlag } from './styles';

export default function ListItem({ countries }) {
    return (
        <Container>
            {countries.map((country) => (
                <Link
                    to={`/country/${country.name.toLowerCase()}`}
                    key={country.name}
                >
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
                </Link>
            ))}
        </Container>
    );
}
