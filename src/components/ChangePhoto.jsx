import React, { useState } from 'react';
import {
   Image,
   StyleSheet,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function ChangePhoto({ selectedImage, setSelectedImage }) {
   const changePhotoPressHandler = async () => {
      let permissionResult =
         await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
         alert('Permission to access camera roll is required!');
         return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
         return;
      }

      setSelectedImage(pickerResult.uri);
   };

   return (
      <TouchableWithoutFeedback onPress={changePhotoPressHandler}>
         <View style={styles.container}>
            <Image style={styles.image} source={{ uri: selectedImage }} />
            <Image
               style={styles.icon}
               source={require('../assets/edit-icon.png')}
            />
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      marginVertical: 10,
      position: 'relative',
   },
   image: {
      width: 120,
      height: 120,
      borderRadius: 100,
   },
   icon: {
      position: 'absolute',
      bottom: 5,
      right: 15,
      width: 20,
      height: 20,
      backgroundColor: 'black',
      borderRadius: 2,
   },
});

export default ChangePhoto;
