import axios from 'axios'

export async function GetPokemon() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        if (response.status === 200) {
            console.log('Hay pokemon', response.data.abilities);
            console.log('response status', response.status);
        }
    } catch (error) {
        console.log('Error al traer los pokemon: ', error);
    }
}