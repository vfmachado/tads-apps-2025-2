import { Image } from 'expo-image';
import { Alert, Platform, StyleSheet, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useEffect, useState } from 'react';
import Card from '@/components/Card';

export default function HomeScreen() {

  const [cont, setCont] = useState(0);
  const [name, setName] = useState("");
  const [obj, setObj] = useState({});

  const minhaFuncao = () => {
    console.log("MINHA FN")
    console.log("INPUT ESTA COM " + name)
    setCont(cont + 1);
  }

  // USE EFFECT QUE OBSERVA CRIACOES DE TELA (SEM DEPENDENCIA) E TAMBEM MODIFICACOES DE VALORES (DEPENDENCIAS)
  useEffect(() => {
    console.log("EXECUTEI MEU USE EFFECT")

    return () => {
      console.log('fn de cleanup')
    }
  }, [cont]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <Text>MEU STATE: {cont}</Text>
      <TextInput style={{borderColor: 'black', borderWidth: 1, padding: 5, borderRadius: 5
      }}
        onChangeText={(txt) => {
          setName(txt);
        }}
      />
      <Text onPress={() => minhaFuncao()}>CLICK ME</Text>

      <Card
          title="Serra do Cipó"
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
          description="Trilhas, cachoeiras e paisagens incríveis para quem curte natureza."
          onPress={() => minhaFuncao()}
      />

      <Card
          title="Serra do Cipó"
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200"
          onPress={() => minhaFuncao()}
      />

      <Card
          title="Serra do Cipó"
          description="Trilhas, cachoeiras e paisagens incríveis para quem curte natureza."
          onPress={() => minhaFuncao()}
      />

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
