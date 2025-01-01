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
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import BackgroundWrapper from "../components/BackgroundWrapper";
import CustomButton from "../components/CustomButton";

const passwordStrength = (password: string) => {
  if (password.length < 6) return "Weak";
  if (password.length < 10) return "Medium";
  return "Strong";
};

const SignUpForm = () => {
  const [strength, setStrength] = useState("");
  const navigation = useNavigation();

  return (
    <BackgroundWrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
        })}
        onSubmit={(values) => {
          Alert.alert("Sign Up Successful",
            "You have successfully logged in.",
            [
              {
                text: "OK",
                onPress: () => navigation.navigate('Login'), 
              },
            ]
          );
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
            <View style={{ paddingVertical: "10%", paddingHorizontal: "31%" }}>
              <Text style={{ fontSize: 28, fontWeight: "700", color: '#4a0e1f' }}>
                Sign-Up
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

            <Text>Create Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={(value) => {
                handleChange("password")(value);
                setStrength(passwordStrength(value));
              }}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Text>Password Strength: {strength}</Text>

            <CustomButton title="Sign Up" onPress={handleSubmit as any} />

            <TouchableOpacity>
              <Text style={styles.switchText}>
                Already have an account?{" "}
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
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
    paddingHorizontal: "13%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#757575",
    marginBottom: 10,
    padding: 8,
    borderRadius: 6,
  },
  error: { color: "red", fontSize: 12 },
  switchText: { marginTop: 10, textAlign: "center" },
  linkText: { color: "black", fontWeight: "bold" },
});

export default SignUpForm;
