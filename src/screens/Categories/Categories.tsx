/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';
import {Error, getCategories, ICategory} from './service';

const Categories = ({navigation}: any) => {
  const [categories, setCategories] = useState<any>([]);
  useEffect(() => {
    getCategories({
      onSuccess: (res: ICategory) => {
        setCategories(res);
      },
      onError: (err: Error) => {
        console.log('err', err);
      },
    });
  }, []);

  const onPressCard = (data: any) => {
    navigation.navigate('Category', {
      data: data,
    });
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.homeContainer}>
          {categories?.map((item: ICategory) => (
            <TouchableOpacity onPress={() => onPressCard(item)} key={item.id}>
              <View style={styles.itemCard}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Image
                  style={styles.image}
                  source={{uri: String(item?.image?.url)}}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 12,
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

export default Categories;
