import React, { useState } from 'react';

import { FaSearch, FaChevronDown } from 'react-icons/fa';

import { Container, FilterList, Search } from './styles';

export default function Filter() {
    const [showDropdown, setShowdropdown] = useState(false);

    function toggleDropdown() {
        setShowdropdown(!showDropdown);
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
                />
            </Search>

            <FilterList toggleDropdown={showDropdown}>
                <button type="button" onClick={toggleDropdown}>
                    <span>Filter by Region</span>
                    <FaChevronDown />
                </button>
                <ul>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul>
            </FilterList>
        </Container>
    );
}
