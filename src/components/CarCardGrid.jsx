import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarCard from './CarCard';
import options from '../constants/cars';

function CarCardGrid({ navigation }) {
   return (
      <View style={styles.container}>
         {options.map((option, index) => (
            <CarCard
               key={index}
               id={option.id}
               image={option.image}
               model={option.model}
               rating={option.rating}
               type={option.type}
               price={option.price}
               navigation={navigation}
            />
         ))}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginVertical: 20,
   },
});

export default CarCardGrid;
