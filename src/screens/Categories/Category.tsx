import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Dimensions,
  Alert,
} from 'react-native';
import {Error, getProducts, IProducts} from './service';

interface IProductProps {
  id: number | string;
  title: string;
  uri: any;
  price: number;
}

const {width} = Dimensions.get('window');

const Category = ({route, navigation}: any) => {
  const {data} = route.params;
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getProducts({
      onSuccess: (res: IProducts) => {
        setProducts(res);
      },
      onError: (err: Error) => {
        console.log('err', err);
      },
      id: data?.id,
    });
  }, [data.id]);

  const onPressCard = () => {
    console.log('a', navigation);
  };

  const onBuy = () => {
    Alert.alert('Sản phẩm này đã hết hàng!');
  };

  return (
    <ScrollView>
      <Text style={styles.titlePage}>{data.title}</Text>
      <View style={styles.multiCol}>
        {products.map((item: IProductProps) => {
          return (
            <TouchableOpacity
              onPress={onPressCard}
              key={item.id}
              style={styles.containerProduct}>
              <View style={styles.itemProduct}>
                <Image style={styles.image} source={{uri: String(item.uri)}} />
                <View style={styles.detailProduct}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <View style={styles.priceAndBuy}>
                    <Text style={styles.itemPrice}>{item.price} VNĐ</Text>
                    <Button title="Mua" onPress={onBuy} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  multiCol: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  titlePage: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
    fontWeight: '700',
  },
  containerProduct: {},
  itemProduct: {
    width: width * 0.45,
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 9,
    borderRadius: 10,
    shadowOpacity: 0.1,
  },
  detailProduct: {},
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 14,
    color: 'red',
  },
  priceAndBuy: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 4,
    marginRight: 4,
  },
  image: {
    marginTop: 10,
    width: 155,
    height: 180,
    marginBottom: 10,
  },
});

export default Category;
