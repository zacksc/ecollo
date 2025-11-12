import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Alert } from 'react-native';
import { styles } from './ProfileStyle';
import profileIcon from '../../../assets/user-icon.png';
import ecoins from '../../../assets/ecoins.png';
import { Header } from '../../components/Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../../../supabaseClient';

export default function Profile({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: 'Carregando...',
    email: 'carregando@email.com',
  });

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) throw authError;
      if (!user) {
        Alert.alert('Erro', 'Usuário não autenticado');
        navigation.replace('Login');
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') { 
        console.warn('Erro ao buscar perfil:', profileError);
      }

      setUserData({
        name: profile?.name || user.user_metadata?.name || 'Usuário',
        email: user.email || 'email não informado',
      });
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
      Alert.alert('Erro', 'Não foi possível carregar os dados do perfil');
      setUserData({
        name: 'Erro ao carregar',
        email: 'erro@erro.com',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Perfil" />

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#00C853" />
          <Text style={{ marginTop: 16, color: '#666' }}>Carregando perfil...</Text>
        </View>
      ) : (
        <>
          <View style={styles.profileInfo}>
            <Image style={styles.profileIcon} source={profileIcon} />
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.email}>{userData.email}</Text>
          </View>

          <View style={styles.ecoinsBackground}>
            <Image style={styles.ecoinsIcon} source={ecoins} />
            <Text style={styles.ecoinsText}>+50 Ecoins</Text>
          </View>

          <View style={styles.rewardsContainer}>
            <Text style={styles.rewardsTitle}>Recompensas disponíveis</Text>
            <Text style={styles.rewardItem}>50 Ecoins = R$5 em Parceiro X</Text>
            <Text style={styles.rewardItem}>100 Ecoins = Desconto em Delivery Y</Text>
            <Text style={styles.rewardItem}>150 Ecoins = R$5 em Parceiro Z</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
