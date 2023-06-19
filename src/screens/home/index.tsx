import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participants } from "../../components/participants";

export function Home() {
  /// Home Component

  // Functions

  function handleParticipantAdd() {
    console.log("New participant Added");
  }

  function handleParticipantRemove() {
    console.log("Participant Removed");
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

      <Participants name="Wlad" onRemove={handleParticipantRemove} />
    </View>
  );
}
