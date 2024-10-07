import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const Home = () => {
    return (
        <StyledView className="flex-1 items-center justify-center">
            <StyledText className="text-3xl">Home</StyledText>
        </StyledView>
    );
}

export default Home;
