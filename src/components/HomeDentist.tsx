import {StyleSheet, View, Text, Image} from 'react-native';

const HomeDentist = () => {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.content}>Check your dental health today</Text>
        <Image
          style={styles.image}
          source={require('../assets/icons/woman_14734350.png')}
        />{' '}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FA',
    height: '100%',
  },
  card: {
    backgroundColor: '#00ABC6',
    width: '90%',
    marginInline: 'auto',
    borderRadius: 30,
    paddingInline: 18,
    paddingBlock: 28,
    marginTop: 6,
    flexDirection: 'row',
    borderBottomColor: '#022057',
    borderBottomWidth: 12,
    borderRightColor: '#022057',
    borderRightWidth: 12,
    borderBottomLeftRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13.84,
    elevation: 17,
  },
  content: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    width: '50%',
    lineHeight: 28,
  },
  image: {
    width: 130,
    height: 140,
    alignSelf: 'flex-start',
    position: 'absolute',
    right: 3,
    top: -24,
  },
});
export default HomeDentist;
