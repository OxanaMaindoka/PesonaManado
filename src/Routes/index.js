import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Splashscreen from '../screens/Splashscreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import TourList from '../screens/TourList';
import Detail from '../screens/Detail';
import Description from '../screens/Description';
import {TabNavigator} from '../components';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="TourList" component={TourList} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
