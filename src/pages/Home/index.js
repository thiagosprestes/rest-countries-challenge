import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Filter from '../../components/Filter';
import ListItem from '../../components/ListItem';

import api from '../../services/api';

export default function Home() {
    const [countries, setCountries] = useState([]);

    async function loadCountries() {
        const response = await api.get('/all');

        setCountries(response.data);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <Container>
            <Filter />
            <ListItem countries={countries.slice(0, 4)} />
        </Container>
    );
}
