import {useKeepAwake} from '@sayem314/react-native-keep-awake';
import {StyleSheet, Text, View} from 'react-native';
import Routes from './src/Routes';

const App = () => {
  useKeepAwake();
  return <Routes />;
};

export default App;

const styles = StyleSheet.create({});
