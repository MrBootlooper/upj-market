import { Box, Heading, HStack, Image, ScrollView, Spacer, Text } from 'native-base';
import React, { useState } from 'react';
import Colors from '../colors';
import Rating from '../components/Rating';
import NumericInput from 'react-native-numeric-input';
import Buttone from '../components/Buttone';
import Review from '../components/Review';
import { useNavigation } from '@react-navigation/native';

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.gambar }} alt="Image" w="full" h={300} resizeMode="contain" />
        <Heading bold fontSize={18} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countinstock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={Number(product.countinstock)} // Ubah ke tipe data number di sini
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
              onChange={handleValueChange}
            />
          ) : (
            <Heading bold color={Colors.red} italic fontSize={12}>
              Stok Habis
            </Heading>
          )}
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            Rp{product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={11}>
          {product.description}
        </Text>
        <Buttone onPress={() => navigation.navigate("Cart")} bg={Colors.main} color={Colors.white} mt={8}>
          MASUKKAN KERANJANG
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
