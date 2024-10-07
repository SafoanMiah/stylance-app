import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const App = () => {
    const router = useRouter();

    return (
        <StyledPressable
            onPress={() => router.push('/home')}
            className="flex-1 items-center justify-center bg-primary"
        >
            <StyledText className="text-5xl font-bold text-secondary">STYLANCE.</StyledText>
            <StatusBar style="auto" />
        </StyledPressable>
    );
};

export default App;
