import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StatusBar} from 'react-native';

const STORE = [
  {
    id: '1',
    title: 'Book',
    img: require('../assets/images/book-store.png'),
    children: [
      {
        id: '11',
        title: 'Thao túng tâm lý',
        uri: require('../assets/images/book-1.png'),
        price: 5000,
      },
      {
        id: '12',
        title: 'Book 2',
        uri: require('../assets/images/book-2.png'),
        price: 5000,
      },
      {
        id: '13',
        title: 'Book 3',
        uri: require('../assets/images/book-3.png'),
        price: 5000,
      },
      {
        id: '14',
        title: 'Book 4',
        uri: require('../assets/images/book-4.png'),
        price: 5000,
      },
    ],
  },
  {
    id: '2',
    title: 'Camera',
    img: require('../assets/images/camera-store.png'),
    children: [
      {
        id: '21',
        title: 'Camera 1',
        uri: require('../assets/images/camera-1.jpeg'),
        price: 5000,
      },
      {
        id: '22',
        title: 'Camera 2',
        uri: require('../assets/images/camera-2.jpeg'),
        price: 5000,
      },
    ],
  },
  {
    id: '3',
    title: 'Clothes',
    img: require('../assets/images/clothes-store.png'),
    children: [
      {
        id: '31',
        title: 'Clothes 1',
        uri: require('../assets/images/clothes-1.jpeg'),
        price: 5000,
      },
      {
        id: '32',
        title: 'Clothes 2',
        uri: require('../assets/images/clothes-2.jpeg'),
        price: 5000,
      },
    ],
  },
  {
    id: '4',
    title: 'Food',
    img: require('../assets/images/food-store.png'),
    children: [
      {
        id: '41',
        title: 'Khô gà lá chanh',
        uri: require('../assets/images/food-1.jpeg'),
        price: 5000,
      },
      {
        id: '42',
        title: 'Mực sấy',
        uri: require('../assets/images/food-2.jpeg'),
        price: 5000,
      },
    ],
  },
  {
    id: '5',
    title: 'Tree',
    img: require('../assets/images/tree-store.png'),
    children: [
      {
        id: '51',
        title: 'Tree 1',
        uri: require('../assets/images/tree-1.jpeg'),
        price: 5000,
      },
      {
        id: '52',
        title: 'Tree 2',
        uri: require('../assets/images/tree-2.jpeg'),
        price: 5000,
      },
    ],
  },
];

const HomeScreen = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onPressCard = (data: any) => {
    navigation.navigate('Category', {
      data: data,
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.homeContainer}>
          <Text style={styles.titlePage}>Family Store</Text>
          {STORE.map((item: any) => (
            <TouchableOpacity onPress={() => onPressCard(item)} key={item.id}>
              <View style={styles.itemCard}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Image style={styles.image} source={item.img} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {},
  titlePage: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
    fontWeight: '700',
  },
  itemCard: {
    height: 180,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowOpacity: 0.1,
  },
  itemTitle: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {marginLeft: 'auto', marginRight: 'auto', width: 97, height: 97},
});

export default HomeScreen;
