import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import firebase from "../database/firebaseDB";
import { useNavigation } from "@react-navigation/native";
const auth = firebase.auth();

export default function ChatScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) navigation.navigate("Chat", { id: user.id, email: user.email });
      else navigation.navigate("Login");
    });
  }, []);

  const logout = () => auth.signOut();

  return (
    <View>
      <Button onPress={logout} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({});
