// a forward slash route (meaning it will match any route that starts with /) that will render the App component.

import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className='text-3xl'>STYLANCE.</Text>
            <StatusBar style="auto" />
            <Link href="/home">Go to Home</Link>
        </View>
    );
};

export default App;