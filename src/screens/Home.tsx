import {View, StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import HomeDentist from '../components/HomeDentist';
import HomeServices from '../components/HomeServices';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeDentist />
      <HomeServices/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FA',
    height: '100%',
  },
});

export default Home;
