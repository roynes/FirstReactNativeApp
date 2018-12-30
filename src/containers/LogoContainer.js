import React from 'react';
import { View, Image } from 'react-native';

export default LogoContainer = ({source, styles}) => {
  return (
    <View style={ styles }>
      <Image source={ source }></Image>
    </View>
  );
}