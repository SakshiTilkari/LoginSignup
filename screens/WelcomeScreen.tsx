import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackgroundWrapper from "../components/BackgroundWrapper";

const WelcomeScreen = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome!</Text>
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 36,
    fontWeight: "700",
    color: "#400d1f",
  },
});

export default WelcomeScreen;
