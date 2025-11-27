import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',  // Fundo opcional para a tela toda
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 100,
  },
  logo: {
    width: 200,
    height: 200,
    top: 100,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',  // Espaçamento uniforme entre itens
    alignItems: 'flex-start',  // Alinha o topo para linhas uniformes
    width: '100%',
    paddingHorizontal: 20,  // Margem lateral para não colar nas bordas
},
  cardItem: {  // Estilo para cada TouchableOpacity (adicione no Hub.js)
    width: '45%',  // Força 2 por linha (45% + espaço)
    alignItems: 'center',
    marginBottom: 5,  // Espaço vertical entre as linhas de cards
  }
});