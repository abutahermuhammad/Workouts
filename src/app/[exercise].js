import { StyleSheet, Text, View } from "react-native";
import exercises from '../../assets/data/exercises.json';
import { Stack, useLocalSearchParams } from "expo-router";


export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();

    const exercise = exercises.find((exercise) => exercise.name === params.exercise);

    return !exercise ? null : (
        <View style={styles.area} >
            <Stack.Screen options={{ title: exercise.name }} />
            <View style={styles.container} >
                <Text>Exercise Details</Text>
                <Text style={styles.cardTitle}>{exercise.name}</Text>
                <Text style={styles.cardMeta}>{exercise.muscle}</Text>
                <Text style={styles.cardMeta}>{exercise.equipment}</Text>
                <Text style={styles.cardMeta}>{exercise.difficulty}</Text>
                <Text style={styles.cardMeta}>{exercise.instructions}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: 'ghostwhite',
    },
    container: {
        padding: 20,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardMeta: {
      marginTop: 8,
        fontSize: 16,
      lineHeight: 20,
      color: 'gray',
    }
})
