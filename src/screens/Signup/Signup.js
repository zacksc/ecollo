import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './SignupStyle';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../../supabaseClient';
import { handleSupabaseError } from '../../../supabaseErrors';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: senha,
        options: {
          data: { name: name.trim() },
        },
      });

      if (error) throw error;

      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: data.user.id,
          name: name.trim(),
          updated_at: new Date(),
        });

      if (profileError) {
        console.warn('Erro ao salvar perfil:', profileError.message);
      }

      Alert.alert(
        'Bem-vindo!',
        'Cadastro realizado com sucesso!',
        [{
          text: 'OK',
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'Main', params: { screen: 'Hub' } }],
          })
        }]
      );

    } catch (error) {
      const mensagem = handleSupabaseError(error);
      Alert.alert('Erro no cadastro', mensagem);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.headerContainer}>
        <Header 
          title="Faça seu cadastro"
          subtitle="Preencha o formulário corretamente"
        />
      </View>
        
      <View style={styles.formContainer}>
        <Input label="Nome" placeholder="Digite seu nome" value={name} onChangeText={setName} />
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
          title={loading ? "Cadastrando..." : "Cadastrar"}
          onPress={handleSignup}
          disabled={loading}
        />

        {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já tem conta? Faça o login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
