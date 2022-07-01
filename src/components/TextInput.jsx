import React from 'react';
import { StyleSheet, TextInput as TI, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function TextInput({
   value = null,
   onChange = () => {},
   placeholder = '',
   icon = '',
   iconSize = 20,
   iconColor = 'gray',
   password = false,
   iconRight = false,
   iconLeft = false,
   type = 'none',
   keyboardType = 'default',
}) {
   const getIcon = () => {
      if (icon === 'email')
         return (
            <MaterialIcons name='email' size={iconSize} color={iconColor} />
         );
      if (icon === 'lock')
         return <Entypo name='lock' size={iconSize} color={iconColor} />;
      if (icon === 'calendar')
         return <Feather name='calendar' size={iconSize} color={iconColor} />;
      if (icon === 'phone')
         return <Entypo name='phone' size={iconSize} color={iconColor} />;
      if (icon === 'arrow-down')
         return <Feather name='arrow-down' size={iconSize} color={iconColor} />;
      if (icon === 'search')
         return (
            <MaterialCommunityIcons
               name='magnify'
               size={iconSize}
               color={iconColor}
            />
         );
   };
   return (
      <View style={styles.sectionContainer}>
         {iconLeft && getIcon()}
         <TI
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={password}
            textContentType={type}
            keyboardType={keyboardType}
         />
         {iconRight && getIcon()}
      </View>
   );
}

const styles = StyleSheet.create({
   sectionContainer: {
      backgroundColor: '#10101014',
      width: '100%',
      paddingVertical: 18,
      paddingHorizontal: 20,
      marginVertical: 5,
      borderRadius: 15,
      flexDirection: 'row',
   },
   input: {
      width: '92%',
      paddingLeft: 10,
   },
});

export default TextInput;
