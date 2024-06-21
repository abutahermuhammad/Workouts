import { Stack } from "expo-router";

export default function RootLayout({ children }) {
    return (
        <Stack >
            <Stack.Screen name="index" options={{
                // headerShown: false,
                title: 'Exercises',
            }} />
        </Stack>
    )
}
