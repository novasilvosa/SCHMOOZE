import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <TouchableOpacity style={styles.linkContainer}>
        <Link href="/profile" style={styles.link}>Go to Profile</Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer}>
        <Link href="/registration" style={styles.link}>Go to Registration</Link>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48CFCB', // Adjust background color
  },
  title: {
    fontSize: 40, // Adjust font size
    fontFamily: 'Poppins-Black', // Ensure font is loaded and correct
    marginBottom: 20, // Space between title and links
  },
  linkContainer: {
    marginBottom: 10, // Space between links
  },
  link: {
    fontSize: 20, // Adjust font size for links
    color: '#FEECB3', // Adjust color for links
    textDecorationLine: 'underline', // Optional: underline links
  },
});
