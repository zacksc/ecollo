import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './HomeStyle';
import logo from '../../../assets/logo-white.png'
import { Button } from '../../components/Button/Button'
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>Recicle hoje & salve nosso planeta</Text>
      <Text style={styles.subtitle}>Troque Ecoins por descontos em diversos parceiros e ajude a curar a Terra</Text>
      <Button
      title="Recicle hoje!" 
      onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
}
