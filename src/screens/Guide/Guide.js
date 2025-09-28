import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './GuideStyle';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'




export default function Guide({navigation}) {
    return(
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header 
          title="Guia de separação"
        />
      </View>

    </View>
    )
}