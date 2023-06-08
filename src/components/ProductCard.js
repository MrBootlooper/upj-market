import React from 'react';
import { Box, Heading, HStack, Image, Pressable, Text } from 'native-base';
import Colors from '../colors';
import { getFirestore, collection, doc, deleteDoc } from 'firebase/firestore';

const ProductCard = ({ product, showDeleteButton }) => {
  const handleDelete = async () => {
    try {
      const db = getFirestore();
      const productRef = doc(collection(db, 'products'), product.id);
      await deleteDoc(productRef);
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Pressable onPress={() => console.log('Product clicked')}>
      <Box borderWidth={1} borderColor={Colors.lightGray} borderRadius={8} p={4}>
        <Image source={{ uri: product.gambar }} alt="Product Image" h={150} resizeMode="cover" mb={2} />

        <Heading fontSize={16} mb={2}>
          {product.name}
        </Heading>

        <Text fontSize={12} color={Colors.gray}>
          Rp{product.price}
        </Text>

        {showDeleteButton && (
          <Pressable onPress={handleDelete}>
            <Box mt={4} bg={Colors.red} borderRadius={4} px={2} py={1}>
              <Text fontSize={12} color={Colors.white}>
                Hapus
              </Text>
            </Box>
          </Pressable>
        )}
      </Box>
    </Pressable>
  );
};

export default ProductCard;
