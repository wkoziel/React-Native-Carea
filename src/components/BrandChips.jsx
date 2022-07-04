import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Chip from './Chip';

const options = [
   { label: 'All', onPress: () => {} },
   { label: 'Mercedes', onPress: () => {} },
   { label: 'Tesla', onPress: () => {} },
   { label: 'BMW', onPress: () => {} },
   { label: 'Toyota', onPress: () => {} },
   { label: 'Volvo', onPress: () => {} },
   { label: 'Bugatti', onPress: () => {} },
   { label: 'Honda', onPress: () => {} },
];

function BrandChips(props) {
   return (
      <ScrollView horizontal contentContainerStyle={styles.container}>
         {options.map((option, index) => (
            <Chip key={index} label={option.label} active={index === 0} />
         ))}
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
   },
});

export default BrandChips;
