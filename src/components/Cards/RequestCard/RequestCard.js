// src/components/Cards/RequestCard/RequestCard.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './RequestCardStyles';
import leafIcon from '../../../../assets/ecoins-icon.png';
import line from '../../../../assets/line.png';

export const RequestCard = ({ orderNumber = '00001', date = '23/12/2024', location = 'Y' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido de Nº {orderNumber}</Text>
      <Text style={styles.subtitle}>{date} - Entregue no ponto {location}</Text>
      <Image style={styles.line} source={line} />
      <View style={styles.bottomContainer}>
        <Text style={styles.status}>Concluído</Text>
        <Image style={styles.leaf} source={leafIcon} />
      </View>
    </View>
  );
};