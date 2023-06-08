import React, { useEffect, useState } from 'react';
import { Box, Heading, ScrollView, VStack, Text, Button, Input } from 'native-base';
import ProductCard from '../components/ProductCard';
import { collection, getFirestore, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import Colors from '../colors';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

function AdminScreen() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const db = getFirestore();
      const productsRef = collection(db, 'products');
      const querySnapshot = await getDocs(productsRef);

      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setProducts(data);
    } catch (error) {
      console.log('Error fetching products: ', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const db = getFirestore();
      const productRef = doc(db, 'products', productId);
      await deleteDoc(productRef);

      // Refresh the product list after deletion
      fetchProducts();
    } catch (error) {
      console.log('Error deleting product: ', error);
    }
  };

  const handleLogin = async () => {
    if (email.trim() === '' || password === '') {
      setLoginError(true);
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      setIsAdmin(true);
      setLoginError(false);
    } catch (error) {
      console.error('Login failed', error);
      setLoginError(true);
    }
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    setIsAdmin(false);
    setEmail('');
    setPassword('');
  };

  if (!isAdmin) {
    return (
      <Box safeArea flex={1} bg={Colors.white} justifyContent="center" alignItems="center">
        <VStack space={4} alignItems="center">
          <Heading bold fontSize={24} mb={4}>
            Masuk sebagai Admin
          </Heading>
          <Input
            placeholder="Email"
            w="80%"
            value={email}
            onChangeText={(text) => setEmail(text)}
            mb={2}
          />
          <Input
            placeholder="Password"
            w="80%"
            value={password}
            onChangeText={(text) => setPassword(text)}
            mb={2}
            type="password"
          />
          {loginError && (
            <Text color="red.500" mb={2}>
              Email atau password salah.
            </Text>
          )}
          <Button onPress={handleLogin}>Login</Button>
        </VStack>
      </Box>
    );
  }

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} py={6} showsVerticalScrollIndicator={false}>
        <Heading bold fontSize={24} mb={4}>
          Daftar Produk
        </Heading>

        <Button onPress={handleLogout} mb={4}>
          Logout
        </Button>

        <VStack space={4}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showDeleteButton
              onDelete={() => handleDeleteProduct(product.id)}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default AdminScreen;
