import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './LoginStyle';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../../supabaseClient';
import { handleSupabaseError } from '../../../supabaseErrors';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !senha) {
      Alert.alert('Erro', 'Preencha e-mail e senha');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: senha,
      });

      if (error) throw error;

      navigation.reset({
        index: 0,
        routes: [{ name: 'Main', params: { screen: 'Hub' } }],
      });

    } catch (error) {
      const mensagem = handleSupabaseError(error);
      Alert.alert('Erro no login', mensagem);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

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
          keyboardType="email-address"
          autoCapitalize="none"
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
          title={loading ? "Entrando..." : "Entrar"}
          onPress={handleLogin}
          disabled={loading}
        />

        {loading && <ActivityIndicator style={{ marginTop: 10 }} color="#000" />}

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
