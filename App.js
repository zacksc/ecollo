import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuma instalado: npm install react-native-vector-icons

import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import Hub from './src/screens/Hub/Hub';
import Guide from './src/screens/Guide/Guide';
import Maps from './src/screens/Maps/Maps';
import Profile from './src/screens/Profile/Profile';
import Radar from './src/screens/Radar/Radar';

const Stack = createNativeStackNavigator();

// Componente da bottom bar customizada (apenas Voltar, Home, Sair)
const CustomBottomBar = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('Hub');
  };

  const handleLogout = () => {
    // Lógica de logout (limpe tokens, etc., se necessário)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomButton} onPress={handleBack}>
        <Icon name="arrow-back" size={24} color="white" />
        <Text style={styles.bottomText}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton} onPress={handleHome}>
        <Icon name="home" size={24} color="white" />
        <Text style={styles.bottomText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton} onPress={handleLogout}>
        <Icon name="exit-outline" size={24} color="white" />
        <Text style={styles.bottomText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#99b66f',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomButton: {
    alignItems: 'center',
    flex: 1,
  },
  bottomText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});

// HOC para envolver as telas que precisam da bottom bar (ajustado para layout mais robusto)
const withBottomBar = (Component) => (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Component {...props} />
      </View>
      <CustomBottomBar />
    </View>
  );
};

// Stack para as telas principais (Main)
const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator 
      initialRouteName="Hub"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Hub" component={Hub} />
      <MainStack.Screen name="Guide" component={withBottomBar(Guide)} />
      <MainStack.Screen name="Maps" component={withBottomBar(Maps)} />
      <MainStack.Screen name="Profile" component={withBottomBar(Profile)} />
      <MainStack.Screen name="Radar" component={withBottomBar(Radar)} />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title: 'Página inicial',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{title: 'Entrar'}}
        />
        <Stack.Screen 
          name='Signup'
          component={Signup}
          options={{title: 'Cadastro'}}
        />
        <Stack.Screen 
          name='Main'
          component={Main}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}