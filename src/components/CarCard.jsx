import React from 'react';
import {
   Image,
   StyleSheet,
   View,
   Text,
   TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import routes from '../routes';

function CarCard({ id, image, model, rating, type, price, navigation }) {
   return (
      <View style={styles.container}>
         <View style={styles.imageContainer}>
            <Image
               source={image}
               style={styles.carImage}
               resizeMode='contain'
            />
            <AntDesign
               style={styles.heartIcon}
               name='hearto'
               size={20}
               color='black'
            />
         </View>
         <View>
            <TouchableWithoutFeedback
               onPress={() => navigation.navigate(routes.carDetails, { id })}
            >
               <Text style={styles.modelText}>{model}</Text>
            </TouchableWithoutFeedback>
            <View style={styles.statsContainer}>
               <AntDesign name='star' size={20} color='black' />
               <Text style={styles.ratingText}>{rating}</Text>
               <Text style={styles.ratingText}>|</Text>
               <Text style={styles.typeText}>{type}</Text>
            </View>
            <Text style={styles.modelText}>${price}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: '48%',
      alignContent: 'center',
      marginVertical: 5,
   },

   imageContainer: {
      backgroundColor: 'lightgray',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },

   carImage: {
      height: 100,
      width: 150,
   },

   heartIcon: {
      position: 'absolute',
      top: 15,
      right: 15,
   },

   modelText: {
      fontSize: 17,
      marginVertical: 3,
      marginLeft: 2,
      fontWeight: '600',
   },

   statsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 130,
      marginLeft: -5,
   },

   typeText: {
      backgroundColor: 'lightgray',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 8,
      fontSize: 12,
   },

   ratingText: {
      color: '#333',
   },
});

export default CarCard;
