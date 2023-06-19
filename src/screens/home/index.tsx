import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { Participants } from "../../components/participants";

export function Home() {
  /// Home Component

  const participants = [
    "Wlad",
    "Diego",
    "Jairo",
    "Ana",
    "Marta",
    "Taylor",
    "John",
  ];

  // Functions

  function handleParticipantAdd() {
    console.log("New participant Added");
  }

  function handleParticipantRemove(name: string) {
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participants
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Wlad")}
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
