import { Box, Button, Input, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import Colors from '../colors';
import HomeProduct from '../components/HomeProduct';
import HomeSearch from '../components/HomeSearch';

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subBlue}>
      <HomeSearch />
      <HomeProduct />
    </Box>
  );
}
export default HomeScreen;
