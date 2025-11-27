import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './SignupStyle';
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
// Removido: import { Login } from '../../screens/Login/Login' (para quebrar o ciclo de import)
import Input from '../../components/Input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header 
          title="Faça seu cadastro"
          subtitle="Preencha o formulário corretamente"
        />
      </View>
        
      <View style={styles.formContainer}>
        <Input
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
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
          title="Cadastrar"  // Sugestão: mudei para "Cadastrar" para fazer sentido (era "Entrar")
          onPress={() => navigation.navigate('Main', { screen: 'Hub' })}  // Corrigido: navega via Main para Hub
          style={styles.button}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já tem conta? Faça o login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}