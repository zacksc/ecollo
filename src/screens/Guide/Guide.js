import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './GuideStyle';
import { Header } from '../../components/Header/Header';

export default function Guide({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Guia de Separação" />
      <View style={styles.guideContainer}>

        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          <View style={styles.guideInfo}>

            <View style={[styles.card, styles.cardPapel]}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardIcon} source={require('../../../assets/paper.png')} />
                <Text style={styles.cardTitle}>Papel</Text>
              </View>
              <Text style={styles.cardText}>Remova restos e amasse caixas planas.</Text>
            </View>

            <View style={[styles.card, styles.cardVidro]}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardIcon} source={require('../../../assets/glass.png')} />
                <Text style={styles.cardTitle}>Vidro</Text>
              </View>
              <Text style={styles.cardText}>Entregue inteiro, sem quebrar.</Text>
            </View>

            <View style={[styles.card, styles.cardPlastico]}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardIcon} source={require('../../../assets/plastic.png')} />
                <Text style={styles.cardTitle}>Plástico</Text>
              </View>
              <Text style={styles.cardText}>Lave garrafas e amasse sacolas. Não amasse.</Text>
            </View>
            
            <View style={[styles.card, styles.cardMetal]}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardIcon} source={require('../../../assets/metal.png')} />
                <Text style={styles.cardTitle}>Metal</Text>
              </View>
              <Text style={styles.cardText}>Lave latas e remova resíduos.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
