import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GetPokemon } from './src/hooks/FetchPokemon';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect, useCallback } from 'react';

SplashScreen.preventAutoHideAsync();
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <><View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text>SplashScreen Demo! 👋</Text>
    </View></>
  );
}

async function response() {
  await GetPokemon();
}

response();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
