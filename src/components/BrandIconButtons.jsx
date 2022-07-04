import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const iconSize = 30;

const options = [
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Tesla',
      icon: <Fontisto name='tesla' size={iconSize} color='black' />,
      onPress: () => {},
   },
   {
      label: 'More',
      icon: (
         <MaterialCommunityIcons
            name='dots-horizontal-circle-outline'
            size={iconSize}
            color='black'
         />
      ),
      onPress: () => {},
   },
];

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
      padding: 20,
      alignItems: 'center',
   },

   buttonContainer: {
      alignItems: 'center',
      margin: 10,
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