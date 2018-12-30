import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';
import React from 'react';

export default CustomButton = ({onclick, style, bordercolor, bgcolor, text, disable}) => {
    return (
      <TouchableNativeFeedback 
        background={ TouchableNativeFeedback.SelectableBackground() } 
        onPress={ onclick }
        disabled={ disable }
      >
        <View 
          style={ [
            styles.textView, 
            { backgroundColor: bgcolor || 'white', borderColor: bordercolor || 'white' }, 
            style 
          ] }
        >
          <Text style={ styles.text } disabled={ disable }>{ text }</Text>
        </View>
      </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
  textView: {
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 5,
    borderWidth: 1,
    padding: 12,
    borderStyle: 'solid',
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  }
});