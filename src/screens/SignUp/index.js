import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SignUp = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>Sign Up with Email</Text>
      </View>

      <View style={{rowGap: 20, marginVertical: 50}}>
        <View>
          <Text style={styles.label}>Your name</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.label}>Your email</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingVertical: 50},
  title: {color: 'black', fontWeight: 'bold'},
  label: {
    color: '#24786D',
  },
  button: {
    backgroundColor: '#20a090',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },
});
