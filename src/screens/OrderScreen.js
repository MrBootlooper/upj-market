import { Box, Heading, ScrollView, Text, View } from 'native-base';
import React from 'react';
import Colors from '../colors';
import OrderInfo from '../components/OrderInfo';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderIterm from '../components/OrderIterm';
import OrderModel from '../components/OrderModel';

function OrderScreen() {
  return (
    <Box bg={Colors.subBlue} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo title="INFORMASI PENGIRIMAN" success subTitle="Pesanan: Nike Air Jordan 1" text="Metode Pembayaran: Cash On Delivery" icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />} />
          <OrderInfo title="ALAMAT PENGIRIMAN" danger subTitle="Alamat Lengkap: " text="Perumahan Griya Serpong, Setu, Tangerang Selatan, Banten 15314" icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />} />
        </ScrollView>
      </Box>
      {/* Order Iterm */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>PRODUCTS</Heading>
        <OrderIterm/>
        {/* Total */}
        <OrderModel/>
      </Box>
    </Box>
  );
}

export default OrderScreen;
