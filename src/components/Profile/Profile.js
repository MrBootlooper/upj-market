import { Box, FormControl, Input, ScrollView, VStack } from 'native-base';
import React, { useState, useEffect } from 'react';
import Colors from '../../colors';
import Buttone from '../Buttone';

// Import Firebase Firestore
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
    field: "username",
  },
  {
    label: "EMAIL",
    type: "text",
    field: "email",
  },
  {
    label: "PASSWORD BARU",
    type: "password",
    field: "password",
  },
  {
    label: "KONFIRMASI PASSWORD",
    type: "password",
    field: "confirmPassword",
  },
];

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = "SyzTRElFG5Ou7NqTgfahOwbFOb42"; // Ganti dengan ID pengguna yang sesuai
        const userRef = doc(collection(db, "users"), userId);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          setProfileData(userSnapshot.data());
        }
      } catch (error) {
        console.log("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((input, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}>
                {input.label}
              </FormControl.Label>
              <Input
                borderWidth={0.2}
                bg={Colors.subBlue}
                py={4}
                type={input.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subBlue,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
                value={profileData?.[input.field] || ""}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
