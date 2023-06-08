import { Box, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../colors";
import Buttone from "../components/Buttone";

function NotVerifyScreen() {
    return (
        <Box flex={1} bg={Colors.main} safeAreaTop>
            <Center w="full" h={250}>
                <Image source={require("../../assets/logo.png")}
                    alt="Logo"
                    size="lg"
                />
            </Center>
            <VStack space={6} px={5} alignItems="center">
                <Buttone bg={Colors.black} color={Colors.white}>REGISTER</Buttone>
                <Buttone bg={Colors.white} color={Colors.black}>LOGIN</Buttone>
            </VStack>
        </Box>
    );
}

export default NotVerifyScreen;