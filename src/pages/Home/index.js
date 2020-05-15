import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Filter from '../../components/Filter';
import ListItem from '../../components/ListItem';

import api from '../../services/api';

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [filtredCountries, setFiltredCountries] = useState([]);
    const [perPage, setPerPage] = useState(50);

    async function loadCountries() {
        const response = await api.get(
            '/all?fields=flag;name;population;region;capital'
        );

        setCountries(response.data);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    function handleFilter(data) {
        if (data === '') {
            setFiltredCountries([]);
            return countries;
        }
        const filter = countries.filter((country) => {
            return country.name.toLowerCase().includes(data.toLowerCase());
        });
        return setFiltredCountries(filter);
    }

    async function loadCountriesByRegion(region) {
        if (region === 'All') {
            return loadCountries();
        }

        const response = await api.get(`/region/${region}`);

        return setCountries(response.data);
    }

    function loadMore() {
        setPerPage(perPage + 10);
    }

    useEffect(() => {
        countries.slice(0, perPage);
    }, [perPage]);

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop <
            document.documentElement.offsetHeight
        ) {
            return;
        }

        loadMore();
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <Container>
            <Filter
                searchTerm={handleFilter}
                filterByRegion={loadCountriesByRegion}
            />
            <ListItem
                countries={
                    filtredCountries.length === 0
                        ? countries.slice(0, perPage)
                        : filtredCountries.slice(0, perPage)
                }
            />
        </Container>
    );
}
