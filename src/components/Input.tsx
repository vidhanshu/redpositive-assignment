import {Colors, globalStyles} from '../styles';
import {StyleSheet, TextInput, View} from 'react-native';

import {InputProps} from '../@types';
import React from 'react';

const Input = (props: InputProps) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <View style={[style.inputContainer, focused ? style.focused : null]}>
      {props.icon ? props.icon : null}
      <TextInput
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        {...props}
        style={[style.input, globalStyles.text]}
      />
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  inputContainer: {
    border: 1,
    borderWidth: 1,
    borderColor: Colors.primary.light,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  focused: {
    borderColor: Colors.primary.main,
  },
});
