import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './CardMapsPageStyle';
import glass from '../../../../assets/glass.png'
import paper from '../../../../assets/paper.png'
import plastic from '../../../../assets/plastic.png'


export function CardMapsPage ({local, distance }) {  
  return (
    <View style={styles.container}>

        <View style={styles.bigRectangle}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Tipos de resíduos aceitos</Text>
            </View>

        <View style={styles.miniRectangle}>
          <View style={styles.iconContainer}>
              <Image style={styles.icon} source={glass}/>
              <Image style={styles.icon} source={paper}/>
              <Image style={styles.icon} source={plastic}/>
          </View>
      <View style={styles.titleContainer}>
        <Text style={styles.local}>{local}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>

        </View>
      </View>
    </View>
  );
}