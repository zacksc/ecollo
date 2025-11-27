import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    bottom: 30,
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
    backgroundColor: '#5c7c31',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  ecoinsText: {
    color: '#fff',
    top: 20,
    fontSize: 22,
    fontWeight: 900,
  },
  rewardsContainer: {
    width: '80%',
    padding: 10,
    backgroundColor: '#bcd4a8',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  rewardsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  rewardItem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  ecoinsIcon: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  }
});
