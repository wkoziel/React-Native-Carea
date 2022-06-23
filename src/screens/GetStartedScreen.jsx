import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
   View,
   Modal,
   Image,
   StyleSheet,
   Text,
   TouchableOpacity,
   SafeAreaView,
} from 'react-native';
import routes from '../routes';
import Button from '../components/Button';

function GetStartedScreen({ navigation }) {
   const [modalVisible, setModalVisible] = useState(true);

   const { navigate } = navigation;

   const modalPressHandler = () => setModalVisible(false);

   const getStartedPressHandler = () => navigate(routes.loginTypes);

   // FIXME: Check if user opens app for the first time, only then show get started modal

   return (
      <>
         <Modal animationType='slide' visible={modalVisible}>
            <TouchableOpacity onPress={modalPressHandler} style={styles.flex}>
               <Image
                  source={require('../assets/get-started-car.webp')}
                  resizeMode='stretch'
                  style={styles.backgroundImage}
               />
               <View style={styles.textContainer}>
                  <Text style={styles.welcomeText}>Welcome to 👋</Text>
                  <Text style={styles.careaText}>Carea</Text>
                  <Text style={styles.descText}>
                     The best car marketplace app of the century for your
                     transportation needs!
                  </Text>
               </View>
            </TouchableOpacity>
         </Modal>
         <SafeAreaView style={styles.container}>
            <Image
               source={require('../assets/white-car-get-started.webp')}
               style={styles.carImage}
               resizeMode='contain'
            />
            <Text style={styles.bestCarText}>
               The best car in your hands with Carea
            </Text>
            <Entypo name='dots-three-horizontal' size={50} color='gray' />
            <Button
               label='Get Started'
               primary
               onPress={getStartedPressHandler}
            />
         </SafeAreaView>
      </>
   );
}

const styles = StyleSheet.create({
   flex: {
      flex: 1,
   },

   backgroundImage: {
      width: '100%',
      height: '100%',
      zIndex: -1,
      position: 'absolute',
   },

   textContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 30,
   },

   welcomeText: {
      color: 'white',
      fontSize: 44,
      fontWeight: '700',
   },

   careaText: {
      color: 'white',
      fontSize: 70,
      fontWeight: '900',
      marginVertical: 20,
   },

   descText: {
      color: 'white',
      fontSize: 18,
   },

   container: {
      flex: 1,
      alignItems: 'center',
   },

   carImage: {
      width: '100%',
   },

   bestCarText: {
      color: 'black',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 36,
      padding: 20,
   },
});

export default GetStartedScreen;
