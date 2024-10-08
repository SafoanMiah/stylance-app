import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'nativewind';
import { Link } from 'expo-router';

import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const SignUp = () => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const submit = () => { }

    //loading state, st start false
    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <SafeAreaView className='bg-primary-200 h-full'>
            <ScrollView>
                <View className='w-full justify-center px-4 my-6'>

                    <StyledText className="text-4xl font-bold text-secondary-300 text-center mt-10">STYLANCE.</StyledText>


                    <FormField
                        title='Username'
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles='mt-20'
                    />
                    <FormField
                        title='Email'
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles='mt-5'
                        keyboardType='email-address'
                    />
                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles='mt-5'
                    />

                    <CustomButton
                        title='Sign Up'
                        handlePress={submit}
                        containerStyles='mt-5 bg-secondary-100'
                        textStyles='text-secondary-300'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-secondary-100'> Already have an account? </Text>
                        <Link href='/sign-in' className='text-lg text-secondary-300 underline'>Sign In</Link>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp