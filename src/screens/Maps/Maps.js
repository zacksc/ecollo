import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from './MapsStyle';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import mapImage from '../../../assets/map.png'
import { CardMapsPage } from '../../components/Cards/CardMapsPage/CardMapsPage'
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Maps({navigation}) {
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header 
          title="Mapa de pontos de coleta"
        />

        <Image
        style={styles.mapContainer}
        source={mapImage}
      />
            </View>
      <ScrollView style={styles.cardContainer}>
      <CardMapsPage 
        local = 'Supermercado Frangolandia'
        distance = '300m'
      />
      <CardMapsPage 
        local = 'Supermercado Assaí'
        distance = '450m'
      />
      <CardMapsPage 
        local = 'Ponto Leste'
        distance = '600m'
      />
      </ScrollView>

    </SafeAreaView>
    )
}