import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styled } from 'nativewind';
import FormField from '../components/FormField';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    return (
        <SafeAreaView className='bg-primary-200 h-full'>
            <ScrollView>
                <View className='w-full justify-center px-4 my-6'>

                    <StyledText className="text-4xl font-bold text-secondary-300">STYLANCE.</StyledText>
                    <Text className="text-2xl font-semibold text-secondary-200 mt-10">Log in to Stylance</Text>

                    <FormField
                        title='Email'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />
                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles='mt-7'
                    />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignIn