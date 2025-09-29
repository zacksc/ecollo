// src/screens/Guide/Guide.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './GuideStyle';
import { Header } from '../../components/Header/Header';
import { CardGuide } from '../../components/Cards/CardGuide/CardGuide';

export default function Guide({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Guia de Separação" />
      <View style={styles.guideContainer}>
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          <View style={styles.guideInfo}>
            <CardGuide
              iconSource={require('../../../assets/paper.png')}
              title="Papel"
              description="Remova restos e amasse caixas planas."
              color="#4a90e2"
            />
            <CardGuide
              iconSource={require('../../../assets/glass.png')}
              title="Vidro"
              description="Entregue inteiro, sem quebrar."
              color="#50c878"
            />
            <CardGuide
              iconSource={require('../../../assets/plastic.png')}
              title="Plástico"
              description="Lave garrafas e amasse sacolas. Não amasse."
              color="#e63946"
            />
            <CardGuide
              iconSource={require('../../../assets/metal.png')}
              title="Metal"
              description="Lave latas e remova resíduos."
              color="#dfc11aff"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}