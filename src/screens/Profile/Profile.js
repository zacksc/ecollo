import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './ProfileStyle';
import { Button } from '../../components/Button/Button'


export default function Profile({navigation}) {
    <View>
        <Text>Testando</Text>
        <Button 
            title="Entrar"
            onPress={() => navigation.navigate('Hub')}
        />
    </View>
}