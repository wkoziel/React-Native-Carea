import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarCard from './CarCard';

const options = [
   {
      image: require('../assets/bmw-image.png'),
      model: 'BMW M4 Series',
      rating: '4.5',
      type: 'New',
      price: '200.000',
   },
   {
      image: require('../assets/bmw-image.png'),
      model: 'Camaro Sports',
      rating: '4.5',
      type: 'New',
      price: '200.000',
   },
   {
      image: require('../assets/bmw-image.png'),
      model: 'Audi Sports',
      rating: '4.5',
      type: 'New',
      price: '200.000',
   },
   {
      image: require('../assets/bmw-image.png'),
      model: 'McLaren Supercar',
      rating: '4.5',
      type: 'New',
      price: '200.000',
   },
   {
      image: require('../assets/bmw-image.png'),
      model: 'Sedan Series',
      rating: '4.5',
      type: 'New',
      price: '200.000',
   },
   {
      image: require('../assets/bmw-image.png'),
      model: 'Ferrari Sports',
      rating: '4.5',
      type: 'New',
      price: '200.000',
   },
];

function CarCardGrid(props) {
   return (
      <View style={styles.container}>
         {options.map((option, index) => (
            <CarCard
               key={index}
               image={option.image}
               model={option.model}
               rating={option.rating}
               type={option.type}
               price={option.price}
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
