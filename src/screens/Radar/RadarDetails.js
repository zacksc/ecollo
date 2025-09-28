import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './RadarStyle';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'



export default function RadarDetails({navigation}) {
    return(
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header 
          title="Rastreabilidade"
          subtitle="Acompanhe seu resíduo"
        />
      </View>
    </View>
    )
}