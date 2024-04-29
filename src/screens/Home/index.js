import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  const Home = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={{display: 'flex', flexDirection: 'row', columnGap: 15}}>
          <Image source={require('../../../assets/images/avatar.png')} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Zein
            </Text>
            <Text style={{color: '#A8A5A5', fontWeight: '300'}}>Profile</Text>
          </View>
        </View>
  
        {/* Banner and Category */}
        <View style={{gap: 35}}>
          <Image source={require('../../../assets/images/banner.png')} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 20,
            }}>
            <TouchableOpacity activeOpacity={0.8} style={{alignItems: 'center'}}>
              <Image source={require('../../../assets/images/beach.png')} />
              <Text style={styles.text}>Pantai</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{alignItems: 'center'}}>
              <Image source={require('../../../assets/images/mountain.png')} />
              <Text style={styles.text}>Gunung</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{alignItems: 'center'}}>
              <Image source={require('../../../assets/images/pool.png')} />
              <Text style={styles.text}>Kolam</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Item */}
        <View style={{gap: 35}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Most Popular
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image source={require('../../../assets/images/beach-card-1.png')} />
            <Image source={require('../../../assets/images/beach-card-2.png')} />
            <Image source={require('../../../assets/images/beach-card-3.png')} />
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 50,
      paddingTop: 40,
      paddingBottom: 30,
      rowGap: 50,
    },
    text: {
      color: 'black',
    },
  });