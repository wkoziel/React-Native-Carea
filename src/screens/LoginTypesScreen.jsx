import React from 'react';
import {
   Image,
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import GoBackPanel from '../components/GoBackPanel';
import routes from '../routes';
import Button from '../components/Button';

const options = [
   {
      label: 'Continue with Facebook',
      icon: <Entypo name='facebook-with-circle' size={24} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Continue with Google',
      icon: <Entypo name='google--with-circle' size={24} color='black' />,
      onPress: () => {},
   },
   {
      label: 'Continue with Apple',
      icon: <AntDesign name='apple1' size={24} color='black' />,
      onPress: () => {},
   },
];

function LoginTypesScreen({ navigation }) {
   const goBackPressHandler = () => {
      navigation.navigate(routes.getStarted);
   };

   const signUpPressHandler = () => {
      navigation.navigate(routes.signUp);
   };

   const signInPressHandler = () => {
      navigation.navigate(routes.signIn);
   };

   return (
      <SafeAreaView style={styles.container}>
         <GoBackPanel onPress={goBackPressHandler} />
         <Image
            source={require('../assets/car.png')}
            resizeMode='contain'
            style={styles.carImage}
         />
         <Text style={styles.title}>Let's you in</Text>
         {options.map((o, i) => (
            <View style={styles.optionButton} key={i}>
               {o.icon}
               <Text style={styles.label}>{o.label}</Text>
            </View>
         ))}
         <Text>or</Text>
         <Button
            label='Sign in with password'
            primary
            onPress={signInPressHandler}
         />
         <TouchableWithoutFeedback onPress={signUpPressHandler}>
            <View style={styles.signUpContainer}>
               <Text style={styles.grayText}>Dont have account?</Text>
               <Text style={styles.boldText}>Sign up</Text>
            </View>
         </TouchableWithoutFeedback>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   carImage: {
      width: '50%',
      height: 150,
   },
   title: {
      color: 'black',
      fontSize: 44,
      fontWeight: '700',
      marginBottom: 20,
   },
   optionButton: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'lightgray',
      width: '90%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 8,
      borderRadius: 20,
   },
   label: {
      marginLeft: 8,
      fontSize: 15,
      fontWeight: '600',
   },
   signUpContainer: {
      flexDirection: 'row',
      padding: 20,
   },
   grayText: {
      color: 'gray',
   },
   boldText: {
      fontWeight: '800',
      marginLeft: 8,
   },
});

export default LoginTypesScreen;
