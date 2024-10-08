//present in all the routes
//rfes

import { StyleSheet, Text, View } from 'react-native'
import { Stack, Slot } from 'expo-router'
import React from 'react'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/*<Stack.Screen name="/search/(query)" options={{ headerShown: false }} />*/}
        </Stack>

    )
}

export default RootLayout