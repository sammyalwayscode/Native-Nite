import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import pic from "../assets/image/inna.png";

const Login = ({ navigation }) => {
  const [userName, onChangeUserName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePasswoed] = useState("");
  return (
    <Container>
      {/* <SignImage source={pic} /> */}
      <SignText>Ready to Explore??? Create An Account with Us</SignText>

      <Text>Username</Text>
      <TextIn
        placeholder="User Name"
        value={userName}
        onChangeText={onChangeUserName}
      />
      <Text>Email</Text>
      <TextIn placeholder="Email" va onChangeText={onChangeEmail} />
      <Text>Password</Text>
      <TextIn placeholder="Password" onChangeText={onChangePasswoed} />
      <SignButton>
        <SignInn>Sign Up</SignInn>
      </SignButton>
      <Text>
        Already Have an Account?{" "}
        <TouchableOpacity
          onPress={() => {
            navigation.push("signup");
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              color: "red",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </Text>
    </Container>
  );
};

export default Login;

const Container = styled(View)``;
const SignImage = styled(Image)`
  width: 300px;
  height: 300px;
  margin-left: 80px;
  resize-mode: contain;
`;
const SignText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 25px;
`;
const TextIn = styled(TextInput)`
  height: 40px;
  width: 340px;
  border: 1px solid #000;
  margin: 10px 0;
`;
const SignButton = styled(TouchableOpacity)`
  height: 40px;
  width: 340px;
  background-color: #4285f4;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const SignInn = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
