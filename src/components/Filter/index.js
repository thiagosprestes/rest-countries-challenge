import React, { useState, useEffect } from 'react';

import { FaSearch, FaChevronDown } from 'react-icons/fa';

import { Container, FilterList, Search } from './styles';

export default function Filter({ searchTerm, filterByRegion }) {
    const [showDropdown, setShowdropdown] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    function toggleDropdown() {
        setShowdropdown(!showDropdown);
    }

    useEffect(() => {
        searchTerm(search);
    }, [search]);

    function selectRegion(region) {
        setSelectedRegion(region);
        filterByRegion(region);
        setShowdropdown(false);
        setSearch('');
    }

    return (
        <Container>
            <Search>
                <FaSearch />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <FilterList toggleDropdown={showDropdown}>
                <button type="button" onClick={toggleDropdown}>
                    {selectedRegion !== '' ? (
                        <span>{selectedRegion}</span>
                    ) : (
                        <span>Filter by Region</span>
                    )}
                    <FaChevronDown />
                </button>
                <ul>
                    {regions.map((region) => (
                        <li key={region}>
                            <button
                                type="button"
                                onClick={() => selectRegion(region)}
                            >
                                <span
                                    style={{
                                        fontWeight:
                                            selectedRegion === region && 'bold',
                                    }}
                                >
                                    {region}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </FilterList>
        </Container>
    );
}
