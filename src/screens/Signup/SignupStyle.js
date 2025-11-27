import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    marginBottom: 40, // dá espaço abaixo do header
  },
  formContainer: {
    marginBottom: 40,
    right: 30,
  },
  bodyContainer: {
    justifyContent: 'center', // centraliza verticalmente
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});
