import React from 'react';
import { styles } from './InputStyles';
import { View, Text, TextInput } from 'react-native';

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}