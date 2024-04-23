import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  return (
    <View>
      <View>
        <Text>Log in with Email</Text>
        <Text>
          Welcome back! Sign in using your social account or email to continue
          us
        </Text>
      </View>

      <View>
        <View>
          <Text>Your email</Text>
          <TextInput />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
