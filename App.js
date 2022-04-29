import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import styled from "styled-components";
import SignUp from "./Screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Screens/Login";
import HomeScreen from "./Screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const RegisterationScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default (props) => {
  const [isFont] = useFonts({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    poppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!isFont) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "red",
        }}
        // initialRouteName=""
      >
        <Tabs.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="home" size={20} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="register"
          component={RegisterationScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icon name="car" size={20} color={color} />;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
