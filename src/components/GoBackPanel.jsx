import React from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function GoBackPanel({ label = '', onPress = () => {}, buttons }) {
   return (
      <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.container}>
            <View>
               <AntDesign name='arrowleft' size={24} color='black' />
               <Text style={styles.text}>{label}</Text>
            </View>
            <View style={{ alignSelf: 'flex-end' }}>{buttons}</View>
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 20,
      marginBottom: 10,
      height: 20,
      marginVertical: 5,
      marginLeft: Platform.OS === 'ios' ? 20 : 0,
      width: '100%',
      background: 'red',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
   },
   text: {
      marginLeft: 10,
      fontSize: 20,
      fontWeight: '600',
   },
});

export default GoBackPanel;
