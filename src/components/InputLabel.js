import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default InputLabel = ({ 
  inputStyles, label, 
  placeholder, valuechange, 
  password, defaultValue, errors 
}) => {
  return (
    <View style={ [inputStyles, styles.widthFull] }>
      <Text style={ styles.text }>{ label }</Text>
      <View style={ styles.textInputView }>
        <TextInput
          style = { [ styles.textInput ] }
          placeholder={ placeholder }
          onChangeText={ valuechange }
          secureTextEntry={ password && true }
          defaultValue={ defaultValue }
          maxLength={ 50 }
        ></TextInput>
      </View>
      { errors.map((error) => <Text style={ styles.statusText } key={error.split(' ')}>{ error }</Text>) }
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 11,
    borderStyle: 'solid',
    borderColor: '#aa8fdb',
    backgroundColor: '#fefefe'
  },

  textInput: {
    fontSize: 17,
  },

  text: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 5,
    color: '#383838'
  },

  statusText: {
    fontWeight: '300', 
    fontStyle: 'italic',
    fontSize: 10,
    color: '#cc0000'
  },

  widthFull: { width: '100%' }
})