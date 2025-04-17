import {View, Text, StyleSheet, Image} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.username}>Ayoub Bezai</Text>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/icons/bell_11088815.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 14,
    marginTop: 3,
    marginBottom: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#e0e0e0',
  },
  greeting: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  username: {
    fontSize: 18,
    fontWeight: '700',
    color: '#242462',
    marginTop: 2,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default HomeHeader;
