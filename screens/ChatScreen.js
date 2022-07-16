import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function ChatScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) navigation.navigate("Chat", { id: user.id, email: user.email });
      else navigation.navigate("Login");
    });

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={logout}>
          <MaterialCommunityIcons name="logout" size={30} color="grey" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const logout = () => auth.signOut();

  return <View></View>;
}

const styles = StyleSheet.create({});
