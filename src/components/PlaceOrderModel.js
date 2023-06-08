import { useNavigation } from '@react-navigation/native';
import { Center, HStack, Modal, Text, VStack, Button } from 'native-base';
import React, { useState } from 'react';
import Colors from '../colors';
import Buttone from './Buttone';

const OrdersInfo = [
  {
    title: 'Products',
    price: '12.650.000',
    color: 'black',
  },
  {
    title: 'Ongkos Kirim',
    price: '9.000',
    color: 'black',
  },
  {
    title: 'Pajak',
    price: '5.000',
    color: 'black',
  },
  {
    title: 'Jumlah Total',
    price: '12.664.000',
    color: 'main',
  },
];

const PlaceOrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Buttone onPress={() => setShowModel(true)} bg={Colors.black} color={Colors.white} mt={5}>
        TAMPILKAN TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i, index) => (
                <HStack key={index} alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text color={i.color === 'main' ? Colors.main : Colors.black} bold>
                    Rp{i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate('Order'); // Update the screen name to match your navigation configuration
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              PESAN SEKARANG
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
