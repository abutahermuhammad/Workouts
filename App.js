import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseCard from './components/ExerciseCard';
import Navbar from './components/Navbar';

const exercise = exercises[0];

export default function App() {

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <Navbar />

      <FlatList
        data={exercises}
        renderItem={({ item, index }) => <ExerciseCard key={index} exercise={item} />}
        contentContainerStyle={{ gap:1 }}
        keyExtractor={(item) => item.name}
      />
      {/* {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))} */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});
