import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");
  
    async function login() {
        try {
          await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
          console.log(error);
          setErrorText(error.message);
        }
      }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App</Text>

      <Text style={styles.fieldTitle}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email here"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.fieldTitle}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password here"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.errorText}>{errorText}</Text>


      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1}}>
        <TextInput keyboardType='numeric'/>
        </View>
        </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "teal",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: "white",
  },

  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
    color: "white",
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    fontSize: 18,
    backgroundColor: "white",
  },

  loginButton: {
    backgroundColor: "lightgreen",
    width: 120,
    alignItems: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
    borderRadius: 10,
  },

  buttonText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 18,
    
  },

  errorText: {
    color: "red",
    marginVertical: 20,
    fontSize: 18,
    
  },
});