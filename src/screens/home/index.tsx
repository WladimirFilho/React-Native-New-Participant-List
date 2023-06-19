
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>Event Name</Text>

      <Text style={styles.eventDate}>
        Friday. 4th of November, 2023
          </Text>
          
          <TextInput
              style={styles.input}
              placeholder='Type here..'
              placeholderTextColor='#6B6B6B'
              keyboardType='default'
        
          />

    </View>
  );
}