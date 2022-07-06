import React from 'react';
import {
   Image,
   StyleSheet,
   Text,
   TouchableWithoutFeedback,
   View,
} from 'react-native';

function SpecialOfferCard({ percentage, title, text, image }) {
   return (
      <TouchableWithoutFeedback>
         <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
               <View style={styles.textContainer}>
                  <Text style={styles.percentage}>{percentage}%</Text>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.text}>{text}</Text>
               </View>
               <View style={styles.imageContainer}>
                  <Image
                     style={styles.image}
                     source={image}
                     resizeMode='center'
                  />
               </View>
            </View>
         </View>
      </TouchableWithoutFeedback>
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

   imageContainer: {
      width: '60%',
   },

   image: {
      height: 130,
      top: 10,
      alignSelf: 'center',
      position: 'absolute',
   },
});

export default SpecialOfferCard;
