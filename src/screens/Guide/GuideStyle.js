import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: 150,
  },
  guideContainer: {
    flex: 1,
    width: '90%',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
    alignItems: 'center', 
  },
  guideInfo: {
    alignItems: 'center',
  },
  card: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'flex-start',
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardPapel: {
    backgroundColor: '#4a90e2',
  },
  cardVidro: {
    backgroundColor: '#50c878',
  },
  cardPlastico: {
    backgroundColor: '#e63946',
  },
  cardMetal: {
    backgroundColor: '#ffd700',
  },
  cardIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'left',
  },
});
