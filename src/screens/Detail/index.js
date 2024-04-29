import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCallback, useRef} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const Detail = ({route, navigation}) => {
  const bottomSheetRef = useRef(null);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleDescription = item => {
    navigation.navigate('Description', {item});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={{zIndex: 10, marginLeft: 20}}>
        <Image source={require('../../../assets/images/back.png')} />
      </TouchableOpacity>

      <Image
        source={require('../../../assets/images/beach-main.png')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '70%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['50%']}>
        <BottomSheetView
          style={{
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            flex: 1,
            paddingBottom: 50,
          }}>
          {/* Header */}
          <View>
            <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 18}}>
              Batu Angus
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  gap: 10,
                }}>
                <Image
                  source={require('../../../assets/images/pin.png')}
                  style={{width: 20, objectFit: 'contain'}}
                />
                <Text style={{color: 'black', flexWrap: 'wrap'}}>
                  Likupang Timur, Minahasa Utara
                </Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image
                  source={require('../../../assets/images/star.png')}
                  style={{width: 20, objectFit: 'contain'}}
                />
                <Text style={{color: 'black'}}>4,6</Text>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={{gap: 30}}>
            <View style={{gap: 18}}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                Facilities
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}>
                  <View style={styles.buttonIconContainer}>
                    <Image
                      source={require('../../../assets/images/food-icon.png')}
                      style={styles.buttonIcon}
                    />
                  </View>
                  <Text style={{color: 'gray'}}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}>
                  <View style={styles.buttonIconContainer}>
                    <Image
                      source={require('../../../assets/images/hotel-icon.png')}
                      style={styles.buttonIcon}
                    />
                  </View>
                  <Text style={{color: 'gray'}}>Hotels</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}>
                  <View style={styles.buttonIconContainer}>
                    <Image
                      source={require('../../../assets/images/beach-icon.png')}
                      style={styles.buttonIcon}
                    />
                  </View>
                  <Text style={{color: 'gray'}}>Beach</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleDescription({category: 'beach'})}
              style={{
                width: '100%',
                paddingVertical: 15,
                borderRadius: 50,
                backgroundColor: '#20a090',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Deskripsi
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    gap: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  buttonIconContainer: {
    width: 44,
    height: 37,
    backgroundColor: '#e5e5e5',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonIcon: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
});
