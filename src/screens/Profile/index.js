import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  return (
    <LinearGradient
      colors={['#6CD32D', '#8FF90800']}
      style={{flex: 1, padding: 20}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.3}}>
      <TouchableOpacity activeOpacity={0.8} style={styles.headerContainer}>
        <Image
          source={require('../../../assets/images/avatar-1.png')}
          style={styles.image}
        />
        <Text style={{color: 'black'}}>Change Picture</Text>
      </TouchableOpacity>

      <View style={{rowGap: 15}}>
        <View style={{rowGap: 10}}>
          <Text style={{color: 'black'}}>Username</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={{rowGap: 10}}>
          <Text style={{color: 'black'}}>E-mail</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={{rowGap: 10}}>
          <Text style={{color: 'black'}}>Phone Number</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={{rowGap: 10}}>
          <Text style={{color: 'black'}}>Password</Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Update</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginBottom: 20,
    rowGap: 10,
  },
  image: {
    width: 142,
    height: 142,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'white',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 8,
    color: 'black',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    backgroundColor: '#20A090',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 50,
  },
});
