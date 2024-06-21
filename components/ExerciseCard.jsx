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
        marginHorizontal: 10,
    backgroundColor: 'white',
        padding: 20,
        borderRadius: 4,
    // margin: 10,
    // borderColor: '#ccc',
        // borderBottomWidth: 1,
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
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
