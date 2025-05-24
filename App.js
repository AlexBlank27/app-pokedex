import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GetPokemon } from './src/hooks/FetchPokemon';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
export default function App() {

  async function response() {
    await GetPokemon();
  }

  response();
  return (
    <MainScreen></MainScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
