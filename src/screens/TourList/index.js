import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const TourList = ({route}) => {
  const [data, setData] = useState(null);
  const {category} = route.params;
  const navigation = useNavigation();
  const handleNavigation = item => {
    navigation.navigate('Detail', {id: item.id});
  };

  const getDestination = async () => {
    try {
      const snapshot = await firestore()
        .collection('destinasi')
        .where('kategori', '==', category)
        .get();
      const normalize = snapshot.docs.map(item => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setData(normalize);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDestination();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/images/back.png')} />
      </TouchableOpacity>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
        {category}
      </Text>

      <FlatList
        data={data}
        contentContainerStyle={{rowGap: 20}}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleNavigation(item)}
            activeOpacity={0.8}
            style={styles.listContainer}>
            <Image
              source={{uri: item.gambar}}
              style={{
                height: '100%',
                width: 90,
                borderRadius: 10,
                objectFit: 'cover',
                backgroundColor: 'grey',
              }}
            />
            <View style={{gap: 5, flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>
                {item.nama}
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image
                  source={require('../../../assets/images/pin.png')}
                  style={{width: 20, objectFit: 'contain'}}
                />
                <Text style={{color: 'black', flexWrap: 'wrap', flex: 1}}>
                  {item.alamat}
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={{width: 20, objectFit: 'contain'}}
                />
                <Text style={{color: 'black'}}>{item.rating}</Text>
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
