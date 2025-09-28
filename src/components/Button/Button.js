import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ButtonStyle';



export function Button ({title, onPress}) {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
}