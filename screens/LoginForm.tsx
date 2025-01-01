import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import CheckBox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import BackgroundWrapper from "../components/BackgroundWrapper";
import CustomButton from "../components/CustomButton";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const saveEmail = async (email: string) => {
    if (rememberMe) {
      await AsyncStorage.setItem("rememberedEmail", email);
    } else {
      await AsyncStorage.removeItem("rememberedEmail");
    }
  };

  return (
    <BackgroundWrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={async (values) => {
          await saveEmail(values.email);
          Alert.alert(
            "Login Successful",
            "You have successfully logged in.",
            [
              {
                text: "OK",
                onPress: () => navigation.navigate('Welcome'), // Navigate to the "Home" screen
              },
            ]
          );;
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View style={{ paddingVertical: "10%", paddingHorizontal: "35%" }}>
              <Text style={{ fontSize: 28, fontWeight: "700", color: "#4a0e1f" }}>
                Login
              </Text>
            </View>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <Text>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <View style={styles.checkboxContainer}>
              <CheckBox value={rememberMe} onValueChange={setRememberMe} />
              <Text> Remember Me</Text>
            </View>

            <CustomButton title="Login" onPress={handleSubmit as any} />

            <TouchableOpacity>
              <Text style={styles.switchText}>
                Don't have an account?{" "}
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: "20%",
    paddingHorizontal: "10%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#757575",
    marginBottom: 10,
    padding: 8,
    borderRadius: 7,
  },
  error: { color: "red", fontSize: 12 },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  switchText: { marginTop: 10, textAlign: "center" },
  linkText: { color: "#340a15", fontWeight: "bold" },
});

export default LoginForm;
