import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, HStack, Text, View, FlatList } from 'native-base';
import React from 'react';
import Colors from '../colors';
import Buttone from '../components/Buttone';
import CartIterms from '../components/CartIterms';

function CartScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.subBlue}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Keranjang Saya
        </Text>
      </Center>
      {/* CART ITEMS */}
      <View flex={1}>
        <FlatList
          data={[1]} // Update the data array with your actual data source if needed
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={() => <CartIterms />}
        />
        {/* total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: 'semibold',
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              Rp125.000
            </Button>
          </HStack>
        </Center>
      </View>
      {/* Checkout */}
      <Center px={5} pb={5}>
        <Buttone
          onPress={() => navigation.navigate('Shipping')}
          bg={Colors.black}
          color={Colors.white}
          mt={10}
        >
          Checkout
        </Buttone>
      </Center>
    </Box>
  );
}

export default CartScreen;
