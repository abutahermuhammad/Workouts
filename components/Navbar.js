import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar} >
      <View style={{}}>
        <Text>Menu</Text>
      </View>

      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Exercises</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    position: 'sticky',
    height: 48,
    width: '100%',
    padding: "10px 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: '#1a1a1a',
  },
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});
