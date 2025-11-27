// src/screens/Guide/Guide.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView, SafeAreaViewBase } from 'react-native';
import { styles } from './GuideStyle';
import { Header } from '../../components/Header/Header';
import { CardGuide } from '../../components/Cards/CardGuide/CardGuide';
import paper from '../../../assets/paper.png'
import glass from '../../../assets/glass.png'
import plastic from '../../../assets/plastic.png'
import metal from '../../../assets/metal.png'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Guide({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
       <Header title="Guia de Separação" />         
          </View>

      <View style={styles.guideContainer}>
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          <View style={styles.guideInfo}>
            <CardGuide
              icon = {paper}
              title="Papel"
              description="Remova restos e amasse caixas planas."
              color="#4a90e2"
            />
            <CardGuide
              icon = {glass}
              title="Vidro"
              description="Entregue inteiro, sem quebrar."
              color="#50c878"
            />
            <CardGuide
              icon = {plastic}
              title="Plástico"
              description="Lave garrafas e amasse sacolas. Não amasse."
              color="#e63946"
            />
            <CardGuide
              icon = {metal}
              title="Metal"
              description="Lave latas e remova resíduos."
              color="#dfc11aff"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}