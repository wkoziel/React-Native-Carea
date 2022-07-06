import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './src/routes';
import GetStartedScreen from './src/screens/GetStartedScreen';
import LoginTypesScreen from './src/screens/LoginTypesScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { Provider } from 'react-redux';
import store from './src/redux';
import CompleteProfileScreen from './src/screens/CompleteProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import CarDetailsScreen from './src/screens/CarDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <Provider store={store}>
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
               <Stack.Screen
                  name={routes.completeProfile}
                  component={CompleteProfileScreen}
               />
               <Stack.Screen name={routes.home} component={HomeScreen} />
               <Stack.Screen
                  name={routes.carDetails}
                  component={CarDetailsScreen}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </Provider>
   );
}
