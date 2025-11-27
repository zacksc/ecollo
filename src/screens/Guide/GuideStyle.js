// src/screens/Guide/GuideStyle.js (atualizado: removidos estilos do card, mantendo apenas os da página)
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center', 
    top: 50,
  },
  guideContainer: {
    flex: 1,
    width: '90%',
  },
  content: {
    flex: 1,
    padding: 30,
  },
  contentContainer: {
    paddingBottom: 20,
    alignItems: 'center', 
  },
  guideInfo: {
    alignItems: 'center',
  },
    headerContainer: {
    marginBottom: 40, // dá espaço abaixo do header
  },
});