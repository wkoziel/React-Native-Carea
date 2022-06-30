import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function GoBackPanel({ label = '', onPress = () => {} }) {
   return (
      <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.container}>
            <AntDesign name='arrowleft' size={24} color='black' />
            <Text style={styles.text}>{label}</Text>
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 10,
      marginBottom: 10,
      height: 20,
      paddingHorizontal: 15,
      marginVertical: 5,
      width: '100%',
      background: 'red',
      alignItems: 'flex-start',
      flexDirection: 'row',
   },
   text: {
      marginLeft: 10,
      fontSize: 20,
      fontWeight: '600',
   },
});

export default GoBackPanel;
