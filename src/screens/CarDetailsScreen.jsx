import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, Image } from 'react-native';
import GoBackPanel from '../components/GoBackPanel';
import routes from '../routes';
import { AntDesign } from '@expo/vector-icons';
import ColorPallet from '../components/ColorPallet';

function CarDetailsScreen({ route, navigation }) {
   const [carId, setCarId] = useState(route.params);

   return (
      <SafeAreaView style={styles.container}>
         <GoBackPanel
            onPress={() => navigation.navigate(routes.home)}
            buttons={
               <AntDesign
                  style={styles.heartIcon}
                  name='hearto'
                  size={22}
                  color='black'
               />
            }
         />
         <Image
            source={require('../assets/white-car-get-started.webp')}
            style={styles.carImage}
            resizeMode='contain'
         />
         <ColorPallet />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingTop: Platform.OS === 'android' ? 30 : 10,
      width: '90%',
      alignSelf: 'center',
   },

   carImage: {
      width: '100%',
      height: 200,
   },
});

export default CarDetailsScreen;
