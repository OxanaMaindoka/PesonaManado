import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Description = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/images/back.png')} />
      </TouchableOpacity>

      <Image
        source={require('../../../assets/images/beach-main.png')}
        style={{
          width: '100%',
          objectFit: 'cover',
          height: 250,
          borderRadius: 50,
        }}
      />

      <View style={{gap: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
          Tentang
        </Text>
        <Text style={{color: 'black'}}>
          Batu Angus Bitung adalah formasi batu karang yang menonjol di perairan
          Bitung, Sulawesi Utara, Indonesia. Keindahan alam bawah lautnya yang
          spektakuler menjadikannya tujuan favorit para penyelam dan penggemar
          aktivitas di bawah air.
        </Text>
        <View style={{gap: 10}}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Harga Tiket
            </Text>
            <Text style={{color: 'black'}}>Rp 10.000 | org</Text>
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Kontak</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../../../assets/images/phone.png')}
                style={{width: 20, height: 20, objectFit: 'contain'}}
              />
              <Text style={{color: 'black'}}>081326286227</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
        Lihat semua tanggapan
      </Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 50,
  },
});
