import React, { Component } from 'react';
import { StyleSheet, View, PixelRatio, Dimensions, ScrollView } from 'react-native';
import { LogoContainer, FormContainer } from './containers';

let { width } = Dimensions.get('window');
let pixelRatio = PixelRatio.get();

export default class NativeApp extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={ styles.container }>
        <View style={ styles.container }>
          <LogoContainer 
            styles={ styles.logoContainer }
            source={ require('../assets/logo.png') }
          />

          <FormContainer
            styles={ styles.inputContainer }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fefefe' 
  },

  logoContainer: { 
    flex: width * pixelRatio <= 1440 ? 5 : 3,  
    alignItems: "center", 
    justifyContent: "center", 
    width: "100%" 
  },

  inputContainer: {
    flex: width * pixelRatio <= 1440 ? 6 : 4, 
    marginHorizontal: 15 
  }
})