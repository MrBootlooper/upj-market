
import { Box, Button, HStack, ScrollView, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../colors";

const Orders = () => {
    return (
        <Box h="full" bg={Colors.white} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Paid Order */}
                <Pressable>
                    <HStack space={1} justifyContent="space-between" alignItems="center" bg={Colors.deepGray} py={5} px={2}>
                        <Text fontSize={10} color={Colors.blue} isTruncated>0123456789</Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>BAYAR</Text>
                        <Text fontSize={12} italic color={Colors.black} isTruncated>23 May 2023</Text>
                        <Button px={7} py={1.5} rounded={50} bg={Colors.main} _text={{
                            color:Colors.white
                        }}
                        _pressed={{
                            bg:Colors.main,
                        }}>
                            Rp12.650.000
                        </Button>
                    </HStack>
                </Pressable>
                {/* Not Paid */}
                <Pressable>
                    <HStack space={1} justifyContent="space-between" alignItems="center" py={5} px={2}>
                        <Text fontSize={10} color={Colors.blue} isTruncated>0123456789</Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>BELUM DIBAYAR</Text>
                        <Text fontSize={12} italic color={Colors.black} isTruncated>Apr 23 2022</Text>
                        <Button px={7} py={1.5} rounded={50} bg={Colors.red} _text={{
                            color:Colors.white
                        }}
                        _pressed={{
                            bg:Colors.red,
                        }}>
                            Rp12.650.000
                        </Button>
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    )
}

    
    export default Orders;