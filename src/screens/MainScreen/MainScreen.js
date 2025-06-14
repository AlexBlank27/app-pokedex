import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, StatusBar, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { CustomTouchable } from "../../components/CustomTouchable/customTouchable";
import { CustomSearchBar } from "../../searchBar/searchBarComponents";
import { GetPokemon } from "../../hooks/FetchPokemon";
import { PokemonCard } from "../../components/card/cardComponents";
//import { ActivityIndicator } from 'react-native';



export const MainScreen = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [dataPokemon, setDataPokemon] = useState('');
    const [name, setName] = useState('');
    const [pkHability, setHability] = useState([]);
    const [pkPic, setPkPic] = useState('');
    const [habilityInfo, sethabilityInfo] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPokemon = async () => {
        setIsLoading(true); // Comienza a cargar
        setIsError(false);
        try {
            const data = await GetPokemon(pokemonName);
            if (!data) {
                setIsError(true);
                setIsLoading(false); // Detiene carga
                return;
            }

            // Guarda los datos si encontró el Pokémon
            setName(data.species.name);
            const abilities = data.abilities.map((item) => item.ability.name);
            setDataPokemon(data.id);
            setPkPic(data.sprites.front_default);

            const abilitiesData = await Promise.all(
                data.abilities.map(async (item) => {
                    const response = await fetch(item.ability.url);
                    const abilityData = await response.json();
                    const descriptionEntry = abilityData.effect_entries.find(
                        (entry) => entry.language.name === 'es'
                    );
                    return {
                        name: item.ability.name,
                        description: descriptionEntry ? descriptionEntry.short_effect : 'Sin descripción disponible.',
                    };
                })
            );
            setHability(abilitiesData);

            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();
            const descripcion = speciesData.flavor_text_entries.find(entry => entry.language.name === 'es');
            if (descripcion) sethabilityInfo(descripcion.flavor_text);

        } catch (error) {
            console.error('Error al obtener datos del Pokémon:', error);
            setIsError(true);
        } finally {
            setIsLoading(false); // Detiene carga en cualquier caso
        }
    };

    // const fetchPokemon = async () => {
    //     setIsLoading(true);
    //     setIsError(false);
    //     try {
    //         const data = await GetPokemon(pokemonName);
    //         if (!data) {
    //             console.log('No se encontró el Pokémon');
    //             setIsError(true);
    //             //     return;
    //         } else if (data) {

    //             setIsError(false);
    //             console.log('data info:', data.game_index);



    //         }
    //         console.log('data:', data);
    //         setName(data.species.name);
    //         const abilities = data.abilities.map((item) => item.ability.name);
    //         setHability(abilities);
    //         pkHability.map((item) => console.log('item', typeof item));
    //         setDataPokemon(data.id);
    //         setPkPic(data.sprites.front_default);
    //         console.log('pkPic:', pkPic);
    //         const abilitiesData = await Promise.all(
    //             data.abilities.map(async (item) => {
    //                 const response = await fetch(item.ability.url);
    //                 const abilityData = await response.json();
    //                 const descriptionEntry = abilityData.effect_entries.find(
    //                     (entry) => entry.language.name === 'es' // o 'en' si quieres en inglés
    //                 );
    //                 return {
    //                     name: item.ability.name,
    //                     description: descriptionEntry ? descriptionEntry.short_effect : 'Sin descripción disponible.',
    //                 };
    //             })
    //         );

    //         setHability(abilitiesData);

    //         // Descripción general del Pokémon
    //         const speciesResponse = await fetch(data.species.url);
    //         const speciesData = await speciesResponse.json();
    //         const descripcion = speciesData.flavor_text_entries.find(
    //             entry => entry.language.name === 'es'
    //         );
    //         if (descripcion) {
    //             console.log('Descripción: ', descripcion.flavor_text);
    //             sethabilityInfo(descripcion.flavor_text);
    //         }
    //         console.log('DATA: ', data);
    //     } catch (error) {
    //         setIsError(true);
    //         console.error('Error al obtener datos del Pokémon:', error);
    //     }
    // };
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

    // if (isError) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={{ color: 'red', fontSize: 20 }}>Pokémon no encontrado</Text>
    //             <TouchableOpacity onPress={() => setIsError(false)}>
    //                 <Text>Volver</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundimage} source={require('../../../assets/pokemonfondo.jpg')} />
            <Image style={styles.backgroundimage2} source={require('../../../assets/pokedex.png')} />


            <CustomSearchBar value={pokemonName} onChangeText={setPokemonName} />


            <View style={{ marginBottom: 20, marginTop: '50%', }}>
                <TouchableOpacity onPress={() => fetchPokemon()} style={{ backgroundColor: 'gray', padding: 10, borderRadius: 15, border: 2, alignItems: 'center', width: '80%' }}>
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>
            {isLoading && (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                        source={require('../../../assets/12334.gif')}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={{ marginTop: 10 }}>Buscando Pokémon...</Text>
                </View>
            )}

            {!isLoading && !isError && dataPokemon && (
                <PokemonCard
                    name={name}
                    pkHability={pkHability}
                    pkPic={pkPic}
                    habilityInfo={habilityInfo}
                />
            )}

            {!isLoading && isError && (
                <View style={styles.cardError}>
                    <Text style={{ color: 'red', fontSize: 20 }}>Pokémon no encontrado</Text>
                    <Image source={require('../../../assets/Daco_5005608.png')} style={{ width: 120, height: 100 }} />
                    <Text style={{ color: 'black', fontSize: 16 }}>Intenta con otro nombre</Text>
                </View>
            )}


            {/* <View style={{ marginTop: '50px' }}>
                {isError ? <View style={styles.cardError}>
                    <Text style={{ color: 'red', fontSize: 20 }}>Pokémon no encontrado</Text>
                    <Image source={require('../../../assets/Daco_5005608.png')} style={{ width: 120, height: 100 }} />
                    <Text style={{ color: 'black', fontSize: 16 }}>Intenta con otro nombre</Text>
                     <TouchableOpacity onPress={() => setIsError(false)}>
                        <Text>Volver</Text>
                    </TouchableOpacity> 
                </View> : <>
                    <PokemonCard name={name}
                        pkHability={pkHability}
                        pkPic={pkPic}
                        habilityInfo={habilityInfo}
                    /></>}

            </View> */}

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
    cardError: {
        backgroundColor: 'withe',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'right',
        width: '80%',
        marginTop: 20,
    },
});
