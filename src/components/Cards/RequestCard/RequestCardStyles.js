// src/components/Cards/RequestCard/RequestCardStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bcd4a8',  // Verde claro conforme o design
    borderRadius: 16,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 316.4,  // Largura padronizada
    height: 124.2,  // Altura padronizada
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    top: 250,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginBottom: 4,
    marginRight: 120,
  },
  subtitle: {
    top: 250,
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    marginBottom: 8,
    marginRight: 70,
  },
  line: {
    top: 65,
    width: 350,
    height: 400,
    marginBottom: 8,
    resizeMode: 'stretch',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    bottom: 190,
    left: 220,
},
  leaf: {
    bottom: 220,
    width: 100,
    height: 150,
    marginLeft: 10,
  },
});