import React, { useState } from 'react';
import {
   Image,
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import GoBackPanel from '../components/GoBackPanel';
import TextInput from '../components/TextInput';
import routes from '../routes';
import Button from '../components/Button';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const options = [
   {
      icon: <Entypo name='facebook-with-circle' size={24} color='black' />,
      onPress: () => {},
   },
   {
      icon: <Entypo name='google--with-circle' size={24} color='black' />,
      onPress: () => {},
   },
   {
      icon: <AntDesign name='apple1' size={24} color='black' />,
      onPress: () => {},
   },
];

function SignUpScreen({ navigation }) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

   const goBackPressHandler = () => {
      navigation.navigate(routes.loginTypes);
   };

   const checkboxPressHandler = () =>
      setIsCheckboxSelected((oldState) => !oldState);

   const signInPressHandler = () => {
      navigation.navigate(routes.signIn);
   };

   return (
      <SafeAreaView style={styles.container}>
         <GoBackPanel onPress={goBackPressHandler} />
         <Image
            source={require('../assets/car.webp')}
            resizeMode='contain'
            style={styles.carImage}
         />
         <Text style={styles.title}>Create Your Account</Text>
         <TextInput
            placeholder='Email'
            value={email}
            onChange={(text) => setEmail(text)}
            icon='email'
            type='emailAddress'
         />
         <TextInput
            placeholder='Password'
            value={password}
            onChange={(text) => setPassword(text)}
            icon='lock'
            password
         />
         <View style={styles.checkboxContainer}>
            <TouchableWithoutFeedback onPress={checkboxPressHandler}>
               <View
                  style={[
                     styles.checkbox,
                     isCheckboxSelected && styles.checkboxSelected,
                  ]}
               />
            </TouchableWithoutFeedback>
            <Text style={styles.checkboxText}>Remember me</Text>
         </View>
         <Button label='Sign up' primary />
         <Text style={styles.divideText}>or continue with</Text>
         <View style={styles.buttonsContainer}>
            {options.map((option) => (
               <View style={styles.iconButton}>{option.icon}</View>
            ))}
         </View>
         <TouchableWithoutFeedback onPress={signInPressHandler}>
            <View style={styles.signUpContainer}>
               <Text style={styles.grayText}>Already have an account?</Text>
               <Text style={styles.boldText}>Sign in</Text>
            </View>
         </TouchableWithoutFeedback>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: { flex: 1, alignItems: 'center' },
   carImage: {
      width: '50%',
      height: 120,
   },
   title: {
      fontSize: 30,
      fontWeight: '600',
      marginBottom: 20,
   },
   checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
   },
   checkbox: {
      borderWidth: 1,
      width: 25,
      height: 25,
      marginRight: 8,
      borderRadius: 10,
   },
   checkboxSelected: {
      backgroundColor: 'black',
   },
   checkboxText: {
      fontWeight: '700',
   },
   divideText: {
      marginVertical: 15,
   },
   buttonsContainer: {
      flexDirection: 'row',
      width: '70%',
      justifyContent: 'space-evenly',
   },
   iconButton: {
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 10,
      paddingHorizontal: 25,
      paddingVertical: 15,
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

export default SignUpScreen;
