import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splashscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <LinearGradient
      colors={['#50C5AEA6', '#F6EF40A6']}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../../../assets/images/logo.png')} />
    </LinearGradient>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({});