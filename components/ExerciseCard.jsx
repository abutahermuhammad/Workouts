import { StyleSheet, Text, View } from "react-native"

export default function ExerciseCard({exercise}) {
    return (
        <View style={styles.card} >
            <Text style={styles.cardTitle}>{exercise.name}</Text>
            <Text style={styles.cardMeta}>{exercise?.muscle?.toUpperCase()} | {exercise.equipment} | {exercise.difficulty}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    // margin: 10,
    // borderColor: '#ccc',
    // borderBottomWidth: 1,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardMeta: {
      marginTop: 8,
      fontSize: 16,
      color: 'gray',
    }
})
