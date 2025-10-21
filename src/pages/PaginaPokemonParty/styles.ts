// src/pages/PaginaPokemonParty/styles.ts

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: 'transparent' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, fontFamily: 'PressStart2P_400Regular', color: '#333' },
  detailsContainer: { alignItems: 'center', padding: 15, backgroundColor: '#ffffff', borderRadius: 15, marginBottom: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 },
  detailsImage: { width: 120, height: 120, marginBottom: 10 },
  detailsName: { fontSize: 24, fontWeight: 'bold', textTransform: 'capitalize' },
  detailsInfo: { fontSize: 16, color: '#666' },
  pokemonCard: { flex: 1, alignItems: 'center', justifyContent: 'center', margin: 5, padding: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee', borderRadius: 10, height: 100 },
  pokemonImage: { width: 70, height: 70 },
  lockedImage: { opacity: 0.3 },
  lockIcon: { width: 35, height: 35, position: 'absolute' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginLeft: 5, marginBottom: 10, color: '#444' },
});

export default styles;