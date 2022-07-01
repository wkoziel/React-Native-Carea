import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Section({ label }) {
   return (
      <View style={styles.container}>
         <Text style={styles.label}>{label}</Text>
         <Text style={styles.seeAll}>See all</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
   },
   label: {
      fontSize: 22,
      fontWeight: '700',
   },

   seeAll: {
      fontSize: 18,
      fontWeight: '600',
   },
});

export default Section;
