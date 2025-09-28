import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './CardMapsPageStyle';


export function CardMapsPage ({local, distance }) {  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{local}</Text>
        <Text style={styles.title}>{distance}</Text>

        <View style={styles.bigRectangle}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Tipos de resíduos aceitos</Text>
            </View>

        <View style={styles.miniRectangle}>
            <View style={styles.iconContainer}>     
        </View>

        </View>
      </View>
    </View>
  );
}