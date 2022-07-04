import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function SpecialOfferCard({ percentage, title, text, image }) {
   return (
      <View style={styles.container}>
         <View style={{ flexDirection: 'row' }}>
            <View style={styles.textContainer}>
               <Text style={styles.percentage}>{percentage}%</Text>
               <Text style={styles.title}>{title}</Text>
               <Text style={styles.text}>{text}</Text>
            </View>
            <Image style={styles.image} source={image} resizeMode='center' />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      height: 180,
      backgroundColor: 'lightgray',
      borderRadius: 30,
      padding: 20,
   },
   textContainer: {
      height: '100%',
      width: '40%',
      alignItems: 'baseline',
      justifyContent: 'space-around',
   },

   percentage: {
      fontSize: 40,
      fontWeight: '700',
      color: '#333',
   },

   title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#333',
   },

   text: {
      fontSize: 12,
   },

   image: {
      height: 110,
      width: '60%',
      marginLeft: 5,
      alignSelf: 'center',
   },
});

export default SpecialOfferCard;
