import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import GradientText from "../components/gradient-text";
const LandingPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-PurpleBg ">
      <Image
        source={require("../assets/WavyBg.png")}
        className="absolute top-1/2"
      />
      <View className="flex container h-full justify-center">
        <View className=" h-2/3 items-start justify-end pl-6 pb-8 ">
          <Text className="font-semibold text-6xl text-white">Hello.</Text>
          <Text className="font-semibold text-4xl mt-2 text-white">
            Let's Get Started!
          </Text>
        </View>
        <View className="container h-1/3 justify-center items-center ">
          <View className="items-center gap-1 w-3/4 ">
            <Pressable className="justify-center items-center bg-white rounded-full w-full ">
              <GradientText
                text="Sign up"
                colors={["#0221C5", "#9795EB"]}
                fontWeight="600"
                fontSize={40}
                containerHeight={50}
                containerWidth={200}
              />
            </Pressable>
            <View className="items-center ">
              <Text className="text-white font-semibold text-md text-center">
                <Text>or</Text>
                {"\n"}
                Already have an account ?
              </Text>
            </View>
            <Pressable className=" items-center bg-white rounded-full w-full">
              <GradientText
                text="Log in"
                colors={["#0221C5", "#9795EB"]}
                fontWeight="600"
                fontSize={40}
                containerHeight={50}
                containerWidth={200}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
