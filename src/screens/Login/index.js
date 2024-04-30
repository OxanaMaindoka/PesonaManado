import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('TabNavigator');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Log in with Email
        </Text>
        <Text style={styles.text}>
          Welcome back! Sign in using your social account or email to continue
          us
        </Text>
      </View>

      <View style={{rowGap: 20}}>
        <View>
          <Text style={styles.label}>Your email</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>

      <View style={{rowGap: 20}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleLogin}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleSignUp}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 80,
    rowGap: 80,
  },
  button: {
    backgroundColor: '#20a090',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    color: 'black',
  },
  label: {
    color: '#24786D',
  },
  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },
});
