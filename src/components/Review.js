import { Box, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from 'native-base';
import React, { useState } from 'react';
import Colors from '../colors';
import Buttone from './Buttone';
import Message from './Notifications/Message';
import Rating from './Rating';

export default function Review() {
    const [rating, setRating] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      {/* <Message color={Colors.main} bg={Colors.subBlue} bold children={'NO REVIEW'} /> */}
      {/* REVIEW */}
      <Box p={3} bg={Colors.subBlue} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Kang Review
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={12}>
          23 Mei 2023
        </Text>
        <Message color={Colors.black} bg={Colors.white} size={12} children={'ga kecewa beli di toko ini, barangnya 100% original dijamin deh'} />
      </Box>
      {/* Write Review */}
      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label _text={{fontSize:'12px', fontWeight:"bold",}}>Rating</FormControl.Label>
            <Select bg={Colors.subBlue} borderWidth={0} rounded={5} py={4} placeholder="Choose Rate" _selectedItem={{
                bg:Colors.subBlue,
                endIcon:<CheckIcon size={3}/>,
            }}
            selectedValue={rating}
            onValueChange={(e) => setRating(e)}
            >
<Select.Item label="1 - Sangat Buruk" value="1"/>
<Select.Item label="2 - Buruk" value="2"/>
<Select.Item label="3 - Biasa" value="3"/>
<Select.Item label="4 - Baik" value="4"/>
<Select.Item label="5 - Sangat Baik" value="5"/>
            </Select>
          </FormControl>
          <FormControl>
          <FormControl.Label _text={{fontSize:'12px', fontWeight:"bold",
        }}
        >
            Comment
            </FormControl.Label>
          <TextArea 
          h={24} 
          w="full" 
          placeholder="Share your rating and help other Users make better choices!" 
          borderWidth={0} 
          bg={Colors.gray} 
          py={4}
          _focus={{
            bg: Colors.subBlue,
        }}
          />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>SUBMIT</Buttone>
          <Message color={Colors.white} bg={Colors.black} children={"Please 'Login' to review this product"} />
        </VStack>
      </Box> */}
    </Box>
  );
}
