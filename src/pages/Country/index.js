import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import {
    Container,
    GoBack,
    CountryContainer,
    CountryInfo,
    BorderCountries,
} from './styles';

import api from '../../services/api';

export default function Country() {
    const [country, setCountry] = useState([]);

    const { name } = useParams();

    const history = useHistory();

    async function loadCountry() {
        const response = await api.get(`/name/${name}`);

        setCountry(response.data[0]);
    }

    useEffect(() => {
        loadCountry();
    }, []);

    useEffect(() => {
        loadCountry();
    }, [name]);

    return (
        <Container>
            <GoBack>
                <Link to="/">
                    <FaArrowLeft />
                    Back
                </Link>
            </GoBack>
            <CountryContainer>
                <div
                    className="flag"
                    style={{ backgroundImage: `url(${country.flag})` }}
                />
                <CountryInfo>
                    <h1>{country.name}</h1>
                    <ul>
                        <li>
                            <span>Native Name:</span> {country.nativeName}
                        </li>
                        <li>
                            <span>Population:</span>{' '}
                            {country.population &&
                                country.population.toLocaleString()}
                        </li>
                        <li>
                            <span>Region:</span> {country.region}
                        </li>
                        <li>
                            <span>Sub Region:</span> {country.subregion}
                        </li>
                        <li>
                            <span>Capital:</span> {country.capital}
                        </li>
                        <li>
                            <span>Top Level Domain:</span>{' '}
                            {country.topLevelDomain}
                        </li>
                        <li>
                            <span>Currencies:</span>{' '}
                            {country.currencies
                                ? country.currencies.map(
                                      (currency) => currency.name
                                  )
                                : ''}
                        </li>
                        <li>
                            <span>Languages:</span>{' '}
                            {country.languages
                                ? country.languages
                                      .map((language) => language.name)
                                      .join(', ')
                                : ''}
                        </li>
                    </ul>
                    {country.borders && country.borders.length > 0 && (
                        <BorderCountries>
                            <strong>Border Countries: </strong>
                            {country.borders
                                ? country.borders.map((border) => {
                                      return (
                                          <Link
                                              to={`/country/${border}`}
                                              key={border}
                                          >
                                              {border}
                                          </Link>
                                      );
                                  })
                                : ''}{' '}
                        </BorderCountries>
                    )}
                </CountryInfo>
            </CountryContainer>
        </Container>
    );
}
