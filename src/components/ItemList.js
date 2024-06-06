// src/components/ItemList.js
import React from 'react';
import { List, ListItem, ListItemText, Alert } from '@mui/material';

const ItemList = ({ items }) => {
    if (items.length === 0) {
        return <Alert severity="info">No items found</Alert>;
    }

    return (
        <List>
            {items.map(item => (
                <ListItem key={item.id}>
                    <ListItemText primary={item.title} secondary={item.body} />
                </ListItem>
            ))}
        </List>
    );
};

export default ItemList;
