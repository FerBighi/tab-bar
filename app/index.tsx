import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from './types/navigation';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<TabParamList>();

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
