import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import Splashscreen from '../screens/Splashscreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import TourList from '../screens/TourList';
import Detail from '../screens/Detail';
import Description from '../screens/Description';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Detail">
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TourList" component={TourList} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
