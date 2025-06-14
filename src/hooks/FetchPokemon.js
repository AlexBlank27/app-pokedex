import axios from 'axios'

export async function GetPokemon(name) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        //https://pokeapi.co/api/v2/pokemon-species/
        if (response.status === 200) {
           //c console.log('Hay pokemon', response.data);
            console.log('response status', response.status);


        }
        return response.data;
    } catch (error) {
        console.log('Error al traer los pokemon: ', error);
        return null;
    }
}