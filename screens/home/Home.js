import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  FlatList,
  HStack,
  Avatar,
  Spacer,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../constants/colors";

const Home = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d73",
      fullName: "Kiara2",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d74",
      fullName: "Kiara3",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d75",
      fullName: "Kiara5",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d76",
      fullName: "Kiara6",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d77",
      fullName: "Kiara7",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d78",
      fullName: "Kiara8",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: COLORS.bgColor,
    //   }}
    // >
    //   <Text>Home!</Text>
    // </View>
    <NativeBaseProvider>
      {/* <Center flex={1} px="3"> */}
      <Center flex={0} px="2" backgroundColor="white">
        <Center w="100%">
          <Box safeArea p="2" py="4" w="90%" maxW="290">
            <Heading
              size="sm"
              fontWeight="600"
              alignSelf="center"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Hello Alan, 100 Operated till now
            </Heading>
          </Box>
        </Center>
      </Center>

      <Center flex={0} px="2" backgroundColor="lightBlue.100">
        <VStack
          my="4"
          space={5}
          w="100%"
          maxW="300px"
          divider={
            <Box px="2">
              <Divider />
            </Box>
          }
        >
          <VStack w="100%" space={5} alignSelf="center">
            {/* <Heading fontSize="lg">Material</Heading> */}
            <Input
              placeholder="Search People & Places"
              width="100%"
              borderRadius="4"
              py="2"
              px="1"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
              // InputRightElement={
              //   <Icon
              //     m="2"
              //     mr="3"
              //     size="6"
              //     color="gray.400"
              //     as={<MaterialIcons name="mic" />}
              //   />
              // }
            />
          </VStack>
        </VStack>
      </Center>
      <Center flex={0} px="2" backgroundColor="blue.700">
        <Center w="100%">
          <Box safeArea p="2" py="4" w="90%" maxW="290">
            <Heading
              size="sm"
              fontWeight="600"
              color="white"
              _dark={{
                color: "warmGray.50",
              }}
              alignSelf="center"
            >
              Recently Operated!
            </Heading>
          </Box>
        </Center>
      </Center>
      <Center flex={0} px="3">
        <VStack
          my="4"
          space={5}
          w="100%"
          maxW="370px"
          divider={
            <Box px="2">
              <Divider />
            </Box>
          }
        >
          <Box>
            {/* <Heading fontSize="xl" p="4" pb="3">
            Inbox
          </Heading> */}
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Box
                  borderBottomWidth="1"
                  _dark={{
                    borderColor: "muted.50",
                  }}
                  borderColor="muted.800"
                  pl={["0", "4"]}
                  pr={["0", "5"]}
                  py="2"
                >
                  <HStack space={[2, 3]} justifyContent="space-between">
                    <VStack>
                      <Avatar
                        size="48px"
                        source={{
                          uri: item.avatarUrl,
                        }}
                      >
                        <Avatar.Badge bg="green.500" />
                      </Avatar>
                      <Text
                        color="green.800"
                        fontSize="11"
                        _dark={{
                          color: "warmGray.400",
                        }}
                      >
                        Discharged
                      </Text>
                    </VStack>
                    <VStack>
                      <Text
                        _dark={{
                          color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                      >
                        {item.fullName}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                      >
                        {item.recentText}
                      </Text>
                    </VStack>
                    <Spacer />
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start"
                    >
                      {item.timeStamp}
                    </Text>
                  </HStack>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
          </Box>
        </VStack>
      </Center>
      {/* </Center> */}
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
