import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { COLORS, ROUTES } from "../../constants";
import LinearGradient from "react-native-linear-gradient";

function LoginForm() {
  const navigation = useNavigation();
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    //console.log(formData.emailId);
    if (formData.emailId === undefined || formData.emailId === "") {
      setErrors({ ...errors, emailId: "Email Id is required" });
      return false;
    } else if (formData.password === undefined || formData.password === "") {
      setErrors({ ...errors, password: "Password is required", emailId: "" });
      return false;
    }
    setErrors({});
    return true;
  };

  const onSubmit = () => {
    validate()
      ? navigation.navigate(ROUTES.HOME)
      : console.log("Validation Failed");
  };

  return (
    <VStack space={3} mt="5">
      <FormControl isRequired isInvalid={"emailId" in errors}>
        <FormControl.Label>Email ID</FormControl.Label>
        <Input
          placeholder="test@gmail.com"
          onChangeText={(value) => setData({ ...formData, emailId: value })}
        />
        {"emailId" in errors ? (
          <FormControl.ErrorMessage>{errors.emailId}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"password" in errors}>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          type="password"
          onChangeText={(value) => setData({ ...formData, password: value })}
        />
        {"password" in errors ? (
          <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
        ) : null}
        <Link
          _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500",
          }}
          alignSelf="flex-end"
          mt="1"
        >
          Forget Password?
        </Link>
      </FormControl>
      <Button onPress={onSubmit} mt="2" colorScheme="indigo">
        Sign in
      </Button>
    </VStack>
  );
}
const Login = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Sign in to continue!
            </Heading>
            <LoginForm />
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;
