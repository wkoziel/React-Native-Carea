import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function DashboardTopBar({ profile }) {
   return (
      <View style={styles.topBar}>
         <Image source={{ uri: profile.photo }} style={styles.topBarImage} />
         <View style={styles.textContainer}>
            <Text style={styles.title}>Good Morning 👋</Text>
            <Text style={styles.name}>{profile?.fullName} </Text>
         </View>
         <View style={styles.iconContainer}>
            <Ionicons name='notifications-outline' size={30} color='black' />
            <Ionicons name='heart-outline' size={30} color='black' />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   topBar: {
      flexDirection: 'row',
      marginTop: 15,
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
   },

   topBarImage: {
      width: 60,
      height: 60,
      borderRadius: 100,
   },

   textContainer: {
      flexGrow: 9,
      marginLeft: 15,
   },

   title: {
      color: 'gray',
      fontSize: 15,
   },

   name: {
      fontSize: 21,
      fontWeight: '600',
   },

   iconContainer: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-between',
   },
});

export default DashboardTopBar;
