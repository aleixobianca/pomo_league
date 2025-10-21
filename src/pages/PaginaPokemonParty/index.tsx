import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';

import { POKEMON_DATA } from '../../data/pokemonData';
import styles from './styles';
import Background from '../../components/Background';

type Pokemon = {
  id: number;
  name: string;
  unlocked: boolean;
  image: any;
  type?: string;
  level?: number;
  pokedexNumber?: string;
};

export default function PaginaPokemonParty({ navigation }: { navigation: any }) {

  const sortedPokedex = POKEMON_DATA.sort((a, b) => {
    const numA = parseInt(a.pokedexNumber.substring(1));
    const numB = parseInt(b.pokedexNumber.substring(1));
    return numA - numB;
  });

  const handlePokemonPress = (pokemon: Pokemon) => {
    if (pokemon.unlocked) {
      navigation.navigate('Pomodoro', { pokemonEscolhido: pokemon });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Pokémon Bloqueado!',
        text2: `Você ainda não desbloqueou o ${pokemon.name}.`,
      });
    }
  };

  const renderPokemonCard = ({ item }: { item: Pokemon }) => (
    <TouchableOpacity onPress={() => handlePokemonPress(item)} style={styles.pokemonCard}>
      {item.unlocked ? (
        <Image source={item.image} style={styles.pokemonImage} />
      ) : (
        <Text style={styles.pokedexNumberText}>{item.pokedexNumber}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        {}
        <Text style={styles.title}>Pokédex</Text>
        
        {}
        
        {}
        <FlatList
          data={sortedPokedex} 
          renderItem={renderPokemonCard}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
        
        <Toast />
      </SafeAreaView>
    </Background>
  );
}