import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './MapsStyle';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import mapImage from '../../../assets/map.png'
import { CardMapsPage } from '../../components/Cards/CardMapsPage/CardMapsPage'



export default function Maps({navigation}) {
    return(
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header 
          title="Mapa de pontos de coleta"
        />
      </View>
        <Image
        style={styles.mapContainer}
        source={mapImage}
      />
      <CardMapsPage />
    </View>
    )
}