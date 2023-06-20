import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Participants } from "../../components/participants";
import { useState } from "react";

// Home Component

export function Home() {
  const [participants, setParticipants] = useState(["Wlad"]);

  // Functions
  function handleParticipantAdd() {
    if (participants.includes("John")) {
      return Alert.alert(
        "Participant duplicated",
        "This participant has being added already"
      );
    }

    setParticipants((prevState) => [...prevState, "new participant"]);

    console.log(participants);
    console.log("New participant Added");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Removing participant",
      `Sure you want to remove -> ${name} ?`,
      [
        {
          text: "Yes",
          onPress: () => Alert.alert(`The participant ${name} was removed`),
        },
        {
          text: "No",
          style: "cancel",
        },
      ]
    );

    console.log("Participant will be Removed");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>

      <Text style={styles.eventDate}>Friday. 4th of November, 2023 </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="  New participants..."
          placeholderTextColor="#6B6B6B"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participants
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Nobody is listed in this event</Text>
        )}
      />
    </View>
  );
}
