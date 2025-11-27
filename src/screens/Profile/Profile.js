import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';
import { styles } from './ProfileStyle';
import profileIcon from '../../../assets/user-icon.png';
import { Header } from '../../components/Header/Header';
import ecoins from '../../../assets/ecoins.png'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Perfil" />

      <View style={styles.profileInfo}>
        <Image style={styles.profileIcon} source={profileIcon} />
        <Text style={styles.name}>Nome Sobrenome</Text>
        <Text style={styles.email}>seuemail@seuemail.com</Text>
      </View>

      <View style={styles.ecoinsBackground}>
        <Image style={styles.ecoinsIcon} source={ecoins}/>
        <Text style={styles.ecoinsText}>+50 Ecoins</Text>
      </View>
      
      <View style={styles.rewardsContainer}>
        <Text style={styles.rewardsTitle}>Recompensas disponíveis</Text>
        <Text style={styles.rewardItem}>50 Ecoins = R$5 em Parceiro X</Text>
        <Text style={styles.rewardItem}>100 Ecoins = Desconto em Delivery Y</Text>
        <Text style={styles.rewardItem}>150 Ecoins = R$5 em Parceiro Z</Text>
      </View>
    </SafeAreaView>
  );
}
