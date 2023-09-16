import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import Task from "../components/Task";

export const Contacts = ({ navigation }: any) => {
  const [task, setTask] = useState<string>();
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask("");
    }
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.white, COLORS.white]}
    >
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={styles.image1}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.image2}
          />
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.image3}
          />
          <Image
            source={require("../assets/hero2.jpg")}
            style={styles.image4}
          />
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}>
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <View>
            <TextInput
              style={styles.input}
              placeholder={"Add contact name"}
              value={task}
              onChangeText={(text) => setTask(text)}
            />
            <TextInput
              style={styles.input}
              placeholder={"Add mobile number"}
              value={task}
              onChangeText={(text) => setTask(text)}
            />
            <TextInput
              style={styles.input}
              placeholder={"Add email address"}
              value={task}
              onChangeText={(text) => setTask(text)}
            />
          </View>

          <TouchableOpacity onPress={handleAddTask}>
            <View style={styles.addWrapper}>
              <Ionicons name="add-outline" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
  },
  image1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
    top: 20,
    left: 20,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
    top: -20,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  image3: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    opacity: 0.3,
    top: 140,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },
  image4: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 120,
    left: 100,
    opacity: 0.3,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  tasksWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: COLORS.black,
    borderWidth: 1,
    width: 290,
    marginBottom: 5,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.secondary,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 83,
  },
});
