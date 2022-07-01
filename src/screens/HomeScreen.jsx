import React, { useEffect, useState } from 'react';
import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import DashboardTopBar from '../components/DashboardTopBar';
import Loader from '../components/Loader';
import Section from '../components/Section';
import TextInput from '../components/TextInput';
import routes from '../routes';
import { readStorageData } from '../utils/storage';

function HomeScreen({ navigation }) {
   const user = useSelector((state) => state.auth.email);
   const [userProfile, setUserProfile] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const loadData = async () => {
         const data = await readStorageData(user);
         if (!data) navigation.navigate(routes.completeProfile);
         else {
            setUserProfile(data);
            setIsLoading(false);
            console.log('====================================');
            console.log('userProfile', data);
            console.log('====================================');
         }
      };
      loadData();
   }, []);

   return (
      <SafeAreaView style={styles.marginTop}>
         {isLoading && <Loader />}
         {!isLoading && (
            <ScrollView
               style={{ width: '90%', alignSelf: 'center' }}
               contentContainerStyle={{ alignItems: 'center' }}
            >
               <DashboardTopBar profile={userProfile} />
               <TextInput placeholder='Search' icon='search' iconLeft />
               <Section label='Special Offers' />
            </ScrollView>
         )}
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   marginTop: {
      marginTop: 20,
   },
});

export default HomeScreen;
