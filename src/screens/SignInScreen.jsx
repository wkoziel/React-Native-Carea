import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import GoBackPanel from '../components/GoBackPanel';
import routes from '../routes';

function SignInScreen({ navigation }) {
   const goBackPressHandler = () => {
      navigation.navigate(routes.loginTypes);
   };
   return (
      <SafeAreaView style={styles.container}>
         <GoBackPanel onPress={goBackPressHandler} />
         <Text>Sign in</Text>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
});

export default SignInScreen;
