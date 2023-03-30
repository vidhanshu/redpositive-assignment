import {ButtonProps, Text, TouchableOpacity} from 'react-native';
import {Colors, globalStyles} from '../styles';

import React from 'react';
import {StyleSheet} from 'react-native';

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={[styles.buttonText, globalStyles.text]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary.main,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
