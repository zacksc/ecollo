import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './RadarStyle';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { RequestCard } from '../../components/Cards/RequestCard/RequestCard';



export default function Radar({navigation}) {
    return(
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header 
          title="Rastreabilidade"
          subtitle="Acompanhe seu resíduo"
        />
      <View style={styles.requestContainer}>
      <RequestCard 
      orderNumber = '00001'
      date = '23/12/2024'
      location = 'Y'
      />
      <RequestCard 
      orderNumber = '00002'
      date = '12/11/2024'
      location = 'Z'
      />
      <RequestCard 
      orderNumber = '00003'
      date = '13/06/2024'
      location = 'E'
      />
      <RequestCard 
      orderNumber = '00004'
      date = '16/01/2024'
      location = 'A'
      />
      </View>
      </View>
    </View>
    )
}