import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import options from '../constants/colors';

function ColorPallet({ props }) {
   return (
      <View style={styles.container}>
         {options.map((option, index) => {
            <View key={index} style={styles.colorCircle}>
               <Text>{option.color}</Text>
            </View>;
         })}
         <Text>Pallet</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
   },

   colorCircle: {
      backgroundColor: 'red',
      // width: 40,
      // height: 40,
      // borderRadius: 100,
   },
});

export default ColorPallet;
