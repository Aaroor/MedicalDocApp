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

function ResetPasswordForm() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (
      formData.currentPassword === undefined ||
      formData.currentPassword === ""
    ) {
      //current password empty
      setErrors({ ...errors, currentPassword: "Current password is required" });
      return false;
    } else if (
      formData.newPassword === undefined ||
      formData.newPassword === ""
    ) {
      //new password empty
      setErrors({
        ...errors,
        newPassword: "New password is required",
        currentPassword: "",
      });
      return false;
    } else if (
      formData.confirmPassword === undefined ||
      formData.confirmPassword === ""
    ) {
      //confirm password empty
      setErrors({
        ...errors,
        confirmPassword: "Confirm password is required",
        currentPassword: "",
        newPassword: "",
      });
      return false;
    } else if (formData.newPassword != formData.confirmPassword) {
      //new password & confirm password mismatch
      setErrors({
        ...errors,
        confirmPassword: "Confirm password is not match with the new password",
        currentPassword: "",
        newPassword: "",
      });
      return false;
    }
    //Validation success
    setErrors({});
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log("Submitted") : console.log("Validation Failed");
  };

  return (
    <VStack space={3} mt="5">
      <FormControl isRequired isInvalid={"currentPassword" in errors}>
        <FormControl.Label>Current Password</FormControl.Label>
        <Input
          type="password"
          onChangeText={(value) =>
            setData({ ...formData, currentPassword: value })
          }
        />
        {"currentPassword" in errors ? (
          <FormControl.ErrorMessage>
            {errors.currentPassword}
          </FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"newPassword" in errors}>
        <FormControl.Label>New Password</FormControl.Label>
        <Input
          type="password"
          onChangeText={(value) => setData({ ...formData, newPassword: value })}
        />
        {"newPassword" in errors ? (
          <FormControl.ErrorMessage>
            {errors.newPassword}
          </FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"confirmPassword" in errors}>
        <FormControl.Label>Confirm Password</FormControl.Label>
        <Input
          type="password"
          onChangeText={(value) =>
            setData({ ...formData, confirmPassword: value })
          }
        />
        {"confirmPassword" in errors ? (
          <FormControl.ErrorMessage>
            {errors.confirmPassword}
          </FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <Button onPress={onSubmit} mt="2" colorScheme="indigo">
        Submit
      </Button>
    </VStack>
  );
}
const ResetPassword = () => {
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
              Reset Password
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
              First time reset your password
            </Heading>
            <ResetPasswordForm />
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
};

export default ResetPassword;
