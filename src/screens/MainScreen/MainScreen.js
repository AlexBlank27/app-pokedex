import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, StatusBar, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { CustomTouchable } from "../../components/CustomTouchable/customTouchable";
import { CustomSearchBar } from "../../searchBar/searchBarComponents";
import { GetPokemon } from "../../hooks/FetchPokemon";
import { PokemonCard } from "../../components/card/cardComponents";



export const MainScreen = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [dataPokemon, setDataPokemon] = useState('');
    const [name, setName] = useState('');
    const [pkHability, setHability] = useState([]);
    const [pkPic, setPkPic] = useState('');
    const [habilityInfo, sethabilityInfo] = useState('');

    const fetchPokemon = async () => {
        try {
            const data = await GetPokemon(pokemonName);
            if (!data) {
                console.log('No se encontró el Pokémon');
                return;
            }
            console.log('data:', data);
            setName(data.species.name);
            const abilities = data.abilities.map((item) => item.ability.name);
            setHability(abilities);
            pkHability.map((item) => console.log('item', typeof item));
            setDataPokemon(data.id);
            setPkPic(data.sprites.front_default);
            console.log('pkPic:', pkPic);
            const abilitiesData = await Promise.all(
                data.abilities.map(async (item) => {
                    const response = await fetch(item.ability.url);
                    const abilityData = await response.json();
                    const descriptionEntry = abilityData.effect_entries.find(
                        (entry) => entry.language.name === 'es' // o 'en' si quieres en inglés
                    );
                    return {
                        name: item.ability.name,
                        description: descriptionEntry ? descriptionEntry.short_effect : 'Sin descripción disponible.',
                    };
                })
            );

            setHability(abilitiesData);

            // Descripción general del Pokémon
            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();
            const descripcion = speciesData.flavor_text_entries.find(
                entry => entry.language.name === 'es'
            );
            if (descripcion) {
                console.log('Descripción: ', descripcion.flavor_text);
                sethabilityInfo(descripcion.flavor_text);
            }

        } catch (error) {
            console.error('Error al obtener datos del Pokémon:', error);
        }
    };
    // const fetchPokemon = () => {       


    // GetPokemon(pokemonName).then(data => {
    //     setDataPokemon(data);
    //     setName(data.species.name);
    //     //setHability(data.abilities);

    //     const abilities = data.abilities.map((item) => item.ability.name);
    //     setHability(data.abilities);
    //     console.log('abilidades: ', abilities);
    //     console.log('Pokedex: ', data.id);
    //     console.log('Altura: ', data.height);

    //     fetch(data.species.url)
    //         .then(response => response.json())
    //         .then(speciesData => {
    //             const descripcion = speciesData.flavor_text_entries.find(
    //                 entry => entry.language.name === 'es'
    //             );
    //             console.log('Descripción: ', descripcion.flavor_text);
    //         });
    // });


    //const weakness = data. 



    return (
        <View style={styles.container}>
            <Image style={styles.backgroundimage} source={require('../../../assets/pokemonfondo.jpg')} />
            <Image style={styles.backgroundimage2} source={require('../../../assets/pokedex.png')} />


            <CustomSearchBar value={pokemonName} onChangeText={setPokemonName} />


            <View style={{ marginBottom: 20, marginTop: '40%', }}>
                <TouchableOpacity onPress={() => fetchPokemon()} style={{ backgroundColor: 'gray', padding: 10, borderRadius: 15, alignItems: 'center', width: '80%' }}>
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: '50px' }}>
                <PokemonCard name={name}
                    pkHability={pkHability}
                    pkPic={pkPic}
                    habilityInfo={habilityInfo}
                />
            </View>
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
