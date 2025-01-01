import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCheckBox = ({ label, onValueChange }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
    onValueChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheck} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, checked && styles.checked]} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 8,
  },
  checked: {
    backgroundColor: 'blue',
  },
});

export default CustomCheckBox;
