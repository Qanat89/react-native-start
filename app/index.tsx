import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";



export default function Index() {
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Home Screen YOU CAN DO IT</Text>
    <Link href="/about" style={styles.button}>
    Go to About screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75292e',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  text:{
    color: '#fff',
  },
  button: {
    fontSize: 30,
    textDecorationLine:'underline',
    color: '#fff'
  }
});