import { Box, HStack, Input } from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Colors from "../colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Inisialisasi aplikasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBIpyC82b8CER_L-L4oLBNMt087Sv8EZw8",
    authDomain: "rpl-1-ad260.firebaseapp.com",
    projectId: "rpl-1-ad260",
    storageBucket: "rpl-1-ad260.appspot.com",
    messagingSenderId: "985031310326",
    appId: "1:985031310326:web:5024c26eea8679965365d7",
    measurementId: "G-PE79887RCC"
};

const app = initializeApp(firebaseConfig);

function HomeSearch() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const db = getFirestore(app);
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("name", "==", searchQuery));
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map((doc) => doc.data());
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <HStack space={3} w="full" px={6} bg={Colors.main} py={4} alignItems="center" safeAreaTop>
      <Input
        placeholder="Arduino, Set alat tulis ... "
        w="85%"
        bg={Colors.white}
        type="search"
        variant="filled"
        h={12}
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <FontAwesome5 name="shopping-cart" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
      <Pressable ml={3} onPress={handleSearch}>
        <FontAwesome5 name="search" size={24} color={Colors.white} />
      </Pressable>
      {loading && (
        <Box ml={3} rounded="full" bg={Colors.white} p={1}>
          <FontAwesome5 name="spinner" size={16} color={Colors.main} />
        </Box>
      )}
      {searchResults.length > 0 && (
        <Box ml={3} rounded="full" bg={Colors.white} p={1}>
          <FontAwesome5 name="check" size={16} color={Colors.main} />
        </Box>
      )}
    </HStack>
  );
}

export default HomeSearch;
