import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, VStack } from "native-base";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import Ionicons from the correct package
import Colors from "../colors";
import Buttone from "../components/Buttone";
import { useNavigation } from "@react-navigation/native";

const paymentMethod = [
    {
        image: require("../../assets/images/cod.png"),
        alt: "cod",
        icon:"Ionicons"
    },
    {
        image: require("../../assets/images/gopay.png"),
        alt: "gopay",
        icon:"FontAwesome"
    },
    {
        image: require("../../assets/images/dana.png"),
        alt: "dana",
        icon:"FontAwesome"
    },
    {
        image: require("../../assets/images/ovo.png"),
        alt: "ovo",
        icon:"FontAwesome"
    },
    {
        image: require("../../assets/images/bca.png"),
        alt: "bca",
        icon:"FontAwesome"
    },
    {
        image: require("../../assets/images/alfamart.png"),
        alt: "alfamart",
        icon:"FontAwesome"
    },
    {
        image: require("../../assets/images/indomaret.png"),
        alt: "indomaret",
        icon:"FontAwesome"
    },
];

function PaymentScreen() {
    const navigation = useNavigation()
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    METODE PEMBAYARAN
                </Text>
            </Center>
            {/* Selection */}
            <Box h="full" bg={Colors.subBlue} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {paymentMethod.map((i,index) => (
                        <HStack key={index} alignItems="center" bg={Colors.white} px={3} py={1} justifyContent="space-between" rounded={10}>
                        <Box>
                            <Image source={i.image}
                            alt={i.alt}
                            resizeMode="contain"
                            w={60}
                            h={50}
                            />     
                        </Box>
                        {i.icon === "Ionicons" ? <Ionicons name="checkmark-circle" size={30} color={Colors.main}/> : <FontAwesome name="circle-thin" size={30} color={Colors.main}/>}
                        
                    </HStack>
                        ))}
                        <Buttone onPress={() => navigation.navigate("Placeorder")} bg={Colors.main} color={Colors.white} mt={5}>
                            SELANJUTNYA
                        </Buttone>
                        <Text italic textAlign="center">Metode Pembayaran <Text bold >COD</Text> by default</Text>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    );
}

export default PaymentScreen;