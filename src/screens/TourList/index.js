import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TourList = ({route}) => {
  const {category} = route.params;
  const navigation = useNavigation();
  const handleNavigation = item => {
    navigation.navigate('Detail');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/images/back.png')} />
      </TouchableOpacity>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
        {category}
      </Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={{rowGap: 20}}
        renderItem={item => (
          <TouchableOpacity
            onPress={() => handleNavigation()}
            activeOpacity={0.8}
            style={styles.listContainer}>
            <Image
              source={require('../../../assets/images/beach-list-1.png')}
              style={{height: '100%', borderRadius: 10, objectFit: 'cover'}}
            />
            <View style={{gap: 5, flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>
                Pantai Pall
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image
                  source={require('../../../assets/images/pin.png')}
                  style={{width: 20, objectFit: 'contain'}}
                />
                <Text style={{color: 'black', flexWrap: 'wrap', flex: 1}}>
                  Likupang Timur, Minahasa Utara
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={{width: 20, objectFit: 'contain'}}
                />
                <Text style={{color: 'black'}}>4,6</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TourList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    gap: 20,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    height: 135,
  },
});