import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import GoBackPanel from '../components/GoBackPanel';
import TextInput from '../components/TextInput';
import routes from '../routes';

function SignUpScreen({ navigation }) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const goBackPressHandler = () => {
      navigation.navigate(routes.loginTypes);
   };

   return (
      <SafeAreaView style={styles.container}>
         <GoBackPanel onPress={goBackPressHandler} />
         <Image
            source={require('../assets/car.png')}
            resizeMode='contain'
            style={styles.carImage}
         />
         <Text style={styles.title}>Create Your Account</Text>
         <TextInput
            placeholder='Email'
            value={email}
            onChange={setEmail}
            icon='email'
         />
         <TextInput
            placeholder='Password'
            value={password}
            onChange={setPassword}
            icon='lock'
            password
         />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: { flex: 1, alignItems: 'center' },
   carImage: {
      width: '50%',
      height: 150,
   },
   title: {
      fontSize: 30,
      fontWeight: '600',
   },
});

export default SignUpScreen;
