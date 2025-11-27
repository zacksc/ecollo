import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './HubStyle';
import logo from '../../../assets/logo.png'
import { CardHub } from '../../components/Cards/CardHub/CardHub'
import map from '../../../assets/map-icon.png'
import guide from '../../../assets/guide.png'
import radar from '../../../assets/radar.png'
import profile from '../../../assets/ecoins-icon.png'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Hub({navigation}) {
    return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Maps')}>
                <CardHub
                title = 'Mapa de pontos de coleta'
                iconSource={map}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Guide')}>
                <CardHub
                title = 'Guia de separação'
                iconSource={guide}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Radar')}>
                <CardHub
                title = 'Rastreabilidade'
                iconSource={radar}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Profile')}>
                <CardHub
                title = 'Ecoins'
                iconSource={profile}
                />
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>
    )
}