import React from 'react';
import {
   StyleSheet,
   Text,
   TouchableHighlight,
   TouchableNativeFeedback,
   View,
} from 'react-native';

function Button({
   label = '',
   primary = false,
   tertiary = false,
   onPress = () => {},
}) {
   return (
      <TouchableNativeFeedback onPress={onPress}>
         <View style={primary && styles.primaryButton}>
            <Text style={primary && styles.primaryButtonText}>{label}</Text>
         </View>
      </TouchableNativeFeedback>
   );
}

const styles = StyleSheet.create({
   primaryButton: {
      backgroundColor: 'black',
      width: '90%',
      height: 55,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
   },
   primaryButtonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 15,
   },

   tertiaryButton: {},
});
export default Button;
