import { View, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from "react-native-elements";
import React from "react";

export default CustomCheckBox = ({styles, checked, onchange, text}) => {
  return (
    <View style={ styles }>  
      <CheckBox
        checked={ checked }
        onPress={ onchange }
        title={ text }
        component={ TouchableWithoutFeedback }
      />
    </View>
  );
}