import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import options from '../constants/brandIcons';

function BrandIconButtons(props) {
   return (
      <View style={styles.container}>
         {options.map((option, index) => (
            <TouchableWithoutFeedback onPress={option.onPress} key={index}>
               <View style={styles.buttonContainer}>
                  <View style={styles.iconContainer}>{option.icon}</View>
                  <Text>{option.label}</Text>
               </View>
            </TouchableWithoutFeedback>
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'space-around',
   },

   buttonContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
      width: '25%',
      // marginHorizontal: 9,
   },

   iconContainer: {
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: 14,
   },
});

export default BrandIconButtons;
