import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import routes from '../routes';
import { FontAwesome5 } from '@expo/vector-icons';

function Menu({ navigate, active }) {
   const options = [
      {
         label: 'Home',
         icon: 'home',
         onPress: () => navigate(routes.home),
      },
      {
         label: 'Order',
         icon: 'shopping-cart',
         onPress: () => {},
      },
      { label: 'Inbox', icon: 'comment', onPress: () => {} },
      { label: 'Wallet', icon: 'wallet', onPress: () => {} },
      { label: 'Profile', icon: 'user', onPress: () => {} },
   ];
   return (
      <View style={styles.container}>
         {options.map((option, index) => (
            <TouchableWithoutFeedback key={index} onPress={option.onPress}>
               <View style={styles.menuButton}>
                  <FontAwesome5
                     name={option.icon}
                     size={24}
                     color={active === index ? 'black' : 'gray'}
                  />
                  <Text
                     style={active === index ? styles.activeText : styles.text}
                  >
                     {option.label}
                  </Text>
               </View>
            </TouchableWithoutFeedback>
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
   },

   menuButton: {
      justifyContent: 'center',
      alignItems: 'center',
   },

   text: { color: 'gray', fontSize: 13 },

   activeText: { fontSize: 13 },
});

export default Menu;
