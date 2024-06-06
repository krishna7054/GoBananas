// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { fetchItems } from './api';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getItems = async () => {
            const items = await fetchItems();
            setItems(items);
            setFilteredItems(items);
        };
        getItems();
    }, []);

    useEffect(() => {
        setFilteredItems(
            items.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, items]);

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                GoBananas
            </Typography>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ItemList items={filteredItems} />
        </Container>
    );
};

export default App;
