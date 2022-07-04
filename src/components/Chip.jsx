import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Chip({ label = '', active = false }) {
   return (
      <View style={styles(active).container}>
         <Text style={styles(active).text}>{label}</Text>
      </View>
   );
}

const styles = (active) =>
   StyleSheet.create({
      container: {
         borderWidth: 2,
         marginRight: 10,
         borderRadius: 20,
         paddingHorizontal: 10,
         paddingVertical: 5,
         backgroundColor: active ? 'black' : 'none',
      },

      text: {
         fontWeight: '700',
         color: active ? 'white' : 'black',
      },
   });

export default Chip;
