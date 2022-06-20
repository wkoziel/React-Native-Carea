import React from 'react';
import { StyleSheet, TextInput as TI, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function TextInput({
   value = null,
   onChange = () => {},
   placeholder = '',
   icon = '',
   iconSize = 22,
   iconColor = 'gray',
   password = false,
}) {
   const getIcon = () => {
      if (icon === 'email')
         return (
            <MaterialIcons name='email' size={iconSize} color={iconColor} />
         );
      if (icon === 'lock')
         return <Entypo name='lock' size={iconSize} color={iconColor} />;
   };
   return (
      <View style={styles.sectionContainer}>
         {getIcon()}
         <TI
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={password}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   sectionContainer: {
      backgroundColor: '#10101014',
      width: '85%',
      paddingVertical: 23,
      paddingHorizontal: 20,
      marginVertical: 5,
      borderRadius: 15,
      flexDirection: 'row',
   },
   input: {
      width: '85%',
      paddingLeft: 10,
   },
});

export default TextInput;
