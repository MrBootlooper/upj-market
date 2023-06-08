import {Box, Button, Center, Heading, Image, Text} from 'native-base';
import React, {useState} from 'react';
import Colors from '../colors';
import Tabs from '../components/Profile/Tabs'; // Mengimpor komponen Tabs dari lokasi yang benar

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png',
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          User
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Bergabung pada 23 Mei 2023
        </Text>
      </Center>
      {/* Tabs */}
      <Tabs />
    </>
  );
}
export default ProfileScreen;
