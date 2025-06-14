import React from 'react';
import { View, Text, Image, } from 'react-native';
import { styles } from "./styles"
import { GetPokemon } from "../../hooks/FetchPokemon";



export const PokemonCard = ({ name, pkHability, pkPic, description, habilityInfo }) => {
    console.log('desde card', pkHability, name)
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.evolution}>Evolves from *** </Text>
                </View>
                <Text style={styles.hp}>HP ###</Text>
            </View>


            {pkPic && (
                <Image
                    source={{ uri: pkPic }}
                    style={styles.image}
                    resizeMode="contain"
                />
            )}

            <Text style={styles.info}>NO. #### Pokémon HT: "" WT: 00.00 lbs.</Text>

            <View style={styles.abilityBox}>
                {pkHability.length > 0 ? pkHability.map((item, index) => (
                    <View key={index}>
                        <Text style={styles.abilityTitle}>{item.name}</Text>
                        <Text style={styles.abilityText}>{item.description}</Text>
                    </View>
                )) : (
                    <Text style={styles.abilityText}>Cargando habilidades...</Text>
                )}
                {/*<!--<Text style={styles.abilityText}>{item.description}</Text>-->*/}
                <Text style={styles.abilityText}>
                    <Text style={styles.abilityDescription}>
                        {habilityInfo || "No hay descripción disponible."}
                    </Text>
                </Text>
            </View>

            <View style={styles.attackRow}>
                <Text style={styles.attackName}><Image source={require('../../../assets/waakness/normal.webp')}
                    style={styles.image2}
                    resizeMode='contain' /><Image source={require('../../../assets/waakness/normal.webp')}
                        style={styles.image2}
                        resizeMode='contain' />Atack</Text>
                <Text style={styles.attackPower}>000</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}><Image source={require('../../../assets/waakness/electric.webp')}
                    style={styles.image2}
                    resizeMode='contain' />weakness ×2</Text>
                <Text style={styles.footerText}>resistance <Image source={require('../../../assets/waakness/fighting.webp')}
                    style={styles.image2}
                    resizeMode='contain' /> -##</Text>
                <Text style={styles.footerText}>retreat ⚪</Text>
            </View>

            <Text style={styles.description}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. {'\n'}Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>

            <Text style={styles.credit}>
                illus. motazo • SCR 115/142 ©2024 Pokémon / Nintendo / Creatures / GAME FREAK
            </Text>
        </View>
    );
};

