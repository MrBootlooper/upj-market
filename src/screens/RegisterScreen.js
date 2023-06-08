import { Box, Heading, Text, View, Image, VStack, Input, Button, Pressable, Alert } from "native-base";
import React, { useState } from "react";
import Colors from '../colors';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase";

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const auth = getAuth(firebaseApp);
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful');
      showAlert('Registration Successful', 'Please login with your new account.'); // Tampilkan notifikasi berhasil
      // Redirect or navigate to the desired screen after successful registration
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration failure (show error message, etc.)
    }
  }

  const showAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: 'OK',
        onPress: () => {
          // Handle OK button press if needed
        }
      }
    ]);
  }

  return (
    <Box flex={1} bg={Colors.black}>
      <Image flex={1} alt="Logo" resizeMode="cover" size="lg" w="full" source={require('../../assets/cover.jpg')} />
      <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={<FontAwesome name="user" size={20} color={Colors.main} />}
            variant="underlined"
            placeholder="Username"
            w="70%" pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
          />

          <Input
            InputLeftElement={<MaterialIcons name="email" size={20} color={Colors.main} />}
            variant="underlined"
            placeholder="example@gmail.com"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />

          <Input
            InputLeftElement={<Ionicons name="eye" size={20} color={Colors.main} />}
            variant="underlined"
            placeholder="************"
            w="70%" type="password"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

        </VStack>
        <Button
          _pressed={{
            bg: Colors.gray,
          }} my={30} w="40%" rounded={50} bg={Colors.main} onPress={handleRegister}>
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
