import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Splashscreen = () => {
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#20a090',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
