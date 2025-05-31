import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, StatusBar, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { CustomTouchable } from "../../components/CustomTouchable/customTouchable";
import { CustomSearchBar } from "../../searchBar/searchBarComponents";
export const MainScreen = () => {
    const [pokemonName, setPokemonName] = useState('');

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundimage} source={require('../../../assets/pokemonfondo.jpg')} />
            <Image style={styles.backgroundimage2} source={require('../../../assets/pokedex.png')} />
            <CustomSearchBar value={pokemonName} onChangeText={setPokemonName} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundimage: {
        width: 550,
        height: 200,
        position: 'absolute',
        top: 30,
        left: 'auto',
    },
    backgroundimage2: {
        width: 300,
        height: 100,
        position: 'absolute',
        top: 80,
        left: 'auto',
    },
});
