import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './src/routes';
import GetStartedScreen from './src/screens/GetStartedScreen';
import LoginTypesScreen from './src/screens/LoginTypesScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <>
         <StatusBar />
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerShown: false,
               }}
            >
               <Stack.Screen
                  name={routes.getStarted}
                  component={GetStartedScreen}
               />
               <Stack.Screen
                  name={routes.loginTypes}
                  component={LoginTypesScreen}
               />
               <Stack.Screen name={routes.signIn} component={SignInScreen} />
               <Stack.Screen name={routes.signUp} component={SignUpScreen} />
            </Stack.Navigator>
            <Stack.Screen name={routes.home} />
         </NavigationContainer>
      </>
   );
}
