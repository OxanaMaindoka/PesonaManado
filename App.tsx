import {useKeepAwake} from '@sayem314/react-native-keep-awake';
import {StyleSheet, Text, View} from 'react-native';
import Routes from './src/Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  useKeepAwake();
  return <GestureHandlerRootView style={{flex: 1}}>
    <Routes />
  </GestureHandlerRootView>
};

export default App;

const styles = StyleSheet.create({});

// 
