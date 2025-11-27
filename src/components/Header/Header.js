import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import logo from '../../../assets/logo.png'
import { styles } from './HeaderStyles';


export function Header ({title, subtitle}) {
  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
  );
}