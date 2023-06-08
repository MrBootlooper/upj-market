import { Box, Button, Heading, Image, Input, Pressable, Text, VStack, NativeBaseProvider, Toast } from 'native-base';
import Colors from '../colors';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import firebaseApp from '../firebase';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    if (email.trim() === '' || password === '') {
      showToast('Please enter email and password');
      return;
    }

    // Validasi email menggunakan regex sebelum melakukan login
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      showToast('Invalid email format');
      return;
    }

    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      navigation.navigate('Bottom'); // Navigate to the Home screen
      // Redirect or navigate to the desired screen after successful login
    } catch (error) {
      console.error('Login failed', error);
      setLoginError(true);
      // Handle login failure (show error message, etc.)
    }
  };

  const showToast = (message) => {
    Toast.show({
      title: message,
      status: 'warning',
      duration: 3000,
      placement: 'top',
    });
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg={Colors.black}>
        <Image flex={1} alt="Logo" resizeMode="cover" size="lg" w="full" source={require('../../assets/cover.jpg')} />
        <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
          <Heading>LOGIN</Heading>

          <VStack space={5} pt="6">
            <Input
              InputLeftElement={<MaterialIcons name="email" size={20} color={Colors.main} />}
              variant="underlined"
              placeholder="example@gmail.com"
              w="70%"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
              onChangeText={(text) => setEmail(text)}
            />

            <Input
              InputLeftElement={<Ionicons name="eye" size={20} color={Colors.main} />}
              variant="underlined"
              placeholder="************"
              w="70%"
              type="password"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
              onChangeText={(text) => setPassword(text)}
            />

            {loginError && (
              <Text color={Colors.red} textAlign="center">
                Maaf, email dan password tidak sesuai.
              </Text>
            )}
          </VStack>

          <Button
            _pressed={{
              bg: Colors.main,
            }}
            my={30}
            w="40%"
            rounded={50}
            bg={Colors.main}
            onPress={handleLogin}
          >
            LOGIN
          </Button>

          <Pressable mt={4} onPress={() => navigation.navigate('Register')}>
            <Text color={Colors.deepestGray}>SIGN UP</Text>
          </Pressable>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

export default LoginScreen;
