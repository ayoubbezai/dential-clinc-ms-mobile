import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {services} from '../constant/HomeServices';

interface CardProps {
  service: string;
}

const Card: React.FC<CardProps> = ({service}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{service}</Text>{' '}
    </View>
  );
};

const HomeServices = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>OurServices</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        {services.map((serv, index) => (
          <Card key={index} service={serv} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 10,
    maxWidth: '100%',
  },
  container: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 14,
    marginTop: 15,
  },
  card: {
    borderColor: '#00ABC6',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13.84,
    elevation: 4,
  },
  text: {
    color: '#000',
  },
  title: {
    color: '#022057',
    paddingHorizontal: 20,
    marginTop: 10,
    fontWeight: 600,
    fontSize: 20,
  },
});

export default HomeServices;
