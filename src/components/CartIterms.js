import React, { useEffect, useState } from "react";
import { Box, Button, Center, HStack, Image, Pressable, Text, VStack } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import Colors from "../colors";
import { FontAwesome } from "@expo/vector-icons";

const db = getFirestore();

const Swiper = ({ products }) => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    renderItem={renderItem}
    renderHiddenItem={hiddenItem}
    showsVerticalScrollIndicator={false}
  />
);

const renderItem = ({ item }) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
        <Center w="25%" bg={Colors.deepGray}>
          <Image source={{ uri: item.gambar }} alt={item.gambar} w="full" h={24} resizeMode="contain" />
        </Center>
        <VStack w="60%" px={2} space={2}>
          <Text isTruncated color={Colors.black} bold fontSize={11}>
            {item.name}
          </Text>
          <Text bold color={Colors.lightBlack}>Rp{item.price}</Text>
        </VStack>
        <Center>
          <Button bg={Colors.main} _pressed={{ bg: Colors.main }} _text={{ color: Colors.white }}>
            1
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);

const hiddenItem = () => (
  <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h="88%" ml="auto" justifyContent="center" bg={Colors.red}>
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden" />
    </Center>
  </Pressable>
);

const CartIterms = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsData = [];
      snapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box mr={6}>
      <Swiper products={products} />
    </Box>
  );
};

export default CartIterms;
