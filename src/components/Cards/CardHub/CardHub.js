import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './CardHubStyle';
// Removido: import icon from '../../../../assets/map-icon.png' (agora via prop)

export function CardHub ({title, iconSource}) {  // Adicionado: prop iconSource
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}>
        <View style={styles.whiteBox}>
          <Image style={styles.icon} source={iconSource}/>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

    </View>
  );
}