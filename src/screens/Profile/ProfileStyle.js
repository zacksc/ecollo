import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  profileIcon: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#99b66f',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#99b66f',
    marginBottom: 20,
  },
  ecoinsBackground: {
    backgroundColor: '#445a14',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  ecoinsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rewardsContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: '#99b66f',
    borderRadius: 5,
  },
  rewardsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  rewardItem: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
});
