import React from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import GradientText from "../components/gradient-text";

const SignupPage = () => {
  // border-2 border-black
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        source={require("../assets/BgSignup.png")}
        className="absolute bottom-1/2"
      />
      <View className="flex container h-full justify-center">
        <View>
          <Text className="absolute left-14 bottom-16 font-medium text-6xl text-gray-600">
            Sign
          </Text>
          <Text className="absolute left-40 bottom-4 font-medium text-6xl text-gray-600">
            Up
          </Text>
        </View>
        <View>
          <View className="flex items-start absolute">
            <GradientText
              text="Email"
              colors={["#0221C5", "#9795EB"]}
              fontWeight="500"
              fontSize={20}
              containerHeight={60}
              containerWidth={100}
            />
            <View className="w-full items-center justify-center">
              <TextInput
                placeholder="Email"
                className="w-full ml-4 border-b-2 border-gray-400"
                textContentType="emailAddress"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
