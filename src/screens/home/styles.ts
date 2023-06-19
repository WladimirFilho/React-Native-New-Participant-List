import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 50,
      flex: 1,
      backgroundColor: 'black',
    },
    eventName:{
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
    eventDate:{
      color: '#9A9A9A',
      
    }, 

    input: {
        marginTop: 20,
        padding: 8,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 10,

        color: 'white',
        fontSize: 16,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 42,
        height: 42,
        borderRadius: 4,
        backgroundColor: '#31CF67'
    

    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
  });