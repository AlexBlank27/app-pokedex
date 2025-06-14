// components/CustomSearchBar.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { styles } from './styles';

export const CustomSearchBar = ({ value, onChangeText }) => {
    return (
        <TextInput
            placeholder="Ingresa el nombre del Pokemon"
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
        />
    );
};


