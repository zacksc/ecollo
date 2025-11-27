// src/components/Cards/CardGuide/CardGuide.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './CardGuideStyles';

export const CardGuide = ({ title, description, color, icon }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <Image style={styles.cardIcon} source={icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardText}>{description}</Text>
        </View>
      </View>
    </View>
  );
};