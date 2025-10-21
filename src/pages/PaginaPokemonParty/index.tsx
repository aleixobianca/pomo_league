import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';
import Background from '../../components/Background';

import { POKEMON_DATA } from '../../data/pokemonData';
import styles from './styles';

type Pokemon = {
  id: number; name: string; type: string; level: number; unlocked: boolean; image: any;
};

export default function PaginaPokemonParty({ navigation }: { navigation: any }) {
  const unlockedPokemons = POKEMON_DATA.filter(p => p.unlocked);
  
  const handlePokemonPress = (pokemon: Pokemon) => {
    if (pokemon.unlocked) {
      navigation.navigate('Pomodoro', { pokemonEscolhido: pokemon });
    } else {
      Toast.show({ type: 'error', text1: 'Pokémon Bloqueado!', text2: 'Assine o Plano Plus!' });
    }
  };

  const renderPokemonCard = ({ item }: { item: Pokemon }) => (
    <TouchableOpacity onPress={() => handlePokemonPress(item)} style={styles.pokemonCard}>
      <Image source={item.image} style={styles.pokemonImage} />
    </TouchableOpacity>
  );

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha seu Pokémon</Text>
      
      <FlatList
        data={unlockedPokemons}
        renderItem={renderPokemonCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
      
      <Toast />
    </SafeAreaView>
    </Background>
  );
}