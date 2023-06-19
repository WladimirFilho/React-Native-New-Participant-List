import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

export function Participants() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                Wladimir Filho
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
    </View>
)
}