import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './LoginStyle';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
// Removido: import { Signup } from '../../screens/Signup/Signup' (para quebrar o ciclo de import)
import Input from '../../components/Input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header 
          title="Seja bem-vindo de volta!"
          subtitle="Coloque suas credenciais corretamente"
        />
      </View>
        
      <View style={styles.formContainer}>
        <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      </View>

      <View style={styles.bodyContainer}>
        <Button 
          title="Entrar"
          onPress={() => navigation.navigate('Main', { screen: 'Hub' })}  // Corrigido: navega via Main para Hub
          style={styles.button}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}