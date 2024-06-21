import { StyleSheet, Text, View } from "react-native";
import exercises from '../../assets/data/exercises.json';
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";


export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();
    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);
    const exercise = exercises.find((exercise) => exercise.name === params.exercise);

    const handleToggleInstruction = () => {
        setIsInstructionExpanded(!isInstructionExpanded);
    }

    return !exercise ? null : (
        <View style={styles.area} >
            <Stack.Screen options={{ title: exercise.name }} />
            <View style={styles.container} >
                <View style={styles.header}>
                    <Text>Exercise Details</Text>
                    <Text style={styles.cardTitle}>{exercise.name}</Text>
                    <Text style={styles.cardMeta}>{exercise.muscle} | {exercise.equipment} | {exercise.difficulty}</Text>
                </View>

                <View style={styles.body}>
                    <Text
                        style={styles.bodyText}
                        numberOfLines={isInstructionExpanded ? undefined : 3}
                    >{exercise.instructions}</Text>

                        <Text
                            style={styles.seeMore}
                            onPress={handleToggleInstruction}
                        >{isInstructionExpanded ? 'See Less' : 'See More'}</Text>
                </View>
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
        marginTop: 10,
      marginBottom: 8,
    },
    cardMeta: {
        fontSize: 16,
      lineHeight: 20,
      color: 'gray',
    },
    bodyText: {
        marginTop: 8,
        fontSize: 15,
        lineHeight: 22,
        color: 'gray',
        textAlign: 'justify',
    },
    header: {
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    body: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    seeMore: {
        marginTop: 13,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
    }
})
