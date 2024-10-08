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
        <StyledView className="flex-1 items-center justify-center bg-primary-200">

            <StyledView className="mb-8">
                <StyledText className="text-6xl font-bold text-secondary-300 left-0.5">STYLANCE.</StyledText>
            </StyledView>

            <StyledPressable
                onPress={() => router.push('/sign-in')}
                className="px-6 py-3 bg-secondary-300 w-[100%] items-center"
            >
                <StyledText className="text-lg font-semibold text-primary-200">Get Started</StyledText>
            </StyledPressable>

        </StyledView>
    );
};

export default App;
