import { Box, Center, Text } from 'native-base';
import React from 'react';
import Colors from '../colors';
import { FontAwesome } from "@expo/vector-icons"
import Buttone from './Buttone';

const CartEmpty = () => {
    return (
        <Box flex={1} px={4}>
            <Center h='90%'>
                <Center w={200} h={200} bg={Colors.white} rounded="full">
                    <FontAwesome name="shopping-cart" size={64} color={Colors.main}/>
                </Center>
                <Text color={Colors.main} bold mt={5}>KERANJANG KOSONG</Text>
            </Center>
            <Buttone bg={Colors.black} color={Colors.white}>
                MULAI BELANJA
            </Buttone>
        </Box>
    )
}

export default CartEmpty