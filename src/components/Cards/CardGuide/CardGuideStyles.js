// src/components/Cards/CardGuide/CardGuideStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: 316.4,
    height: 124.2,
    borderRadius: 16,
    margin: 10,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'flex-start',
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Fundo branco com transparência (80%)
    borderRadius: 10,  // Arredondado para melhor visual
    padding: 8,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIcon: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'left',
  },
  cardText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',  // Levemente transparente para contraste
    textAlign: 'left',
    lineHeight: 18,
  },
});