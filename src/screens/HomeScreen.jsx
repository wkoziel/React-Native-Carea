import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import routes from '../routes';
import { readStorageData } from '../utils/storage';

function HomeScreen({ navigation }) {
   const user = useSelector((state) => state.auth.email);
   console.log('====================================');
   console.log(user);
   console.log('====================================');

   useEffect(() => {
      const loadData = async () => {
         const isCreated = await readStorageData(user);
         if (!isCreated) navigation.navigate(routes.completeProfile);
      };
      loadData();
   }, []);

   return (
      <SafeAreaView>
         <Text>Home Screen</Text>
      </SafeAreaView>
   );
}

export default HomeScreen;
