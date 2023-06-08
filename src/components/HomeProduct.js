import { useNavigation } from '@react-navigation/native';
import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import Colors from '../colors';
import Rating from './Rating';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Inisialisasi aplikasi Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBIpyC82b8CER_L-L4oLBNMt087Sv8EZw8',
  authDomain: 'rpl-1-ad260.firebaseapp.com',
  projectId: 'rpl-1-ad260',
  storageBucket: 'rpl-1-ad260.appspot.com',
  messagingSenderId: '985031310326',
  appId: '1:985031310326:web:5024c26eea8679965365d7',
  measurementId: 'G-PE79887RCC',
};

const app = initializeApp(firebaseConfig);

function HomeProduct() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore(app);
      const snapshot = await getDocs(collection(db, 'products'));
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsData);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between" px={6}>
        {products.map((product) => (
          <Pressable
            onPress={() => navigation.navigate('Single', product)}
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.gambar }}
              alt={product.name}
              aspectRatio={1} // Atur rasio aspek sesuai kebutuhan
              w="full"
              h={200}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                Rp{product.price}
              </Heading>
              <Text fontSize={12} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProduct;
