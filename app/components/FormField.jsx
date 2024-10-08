import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FormField = ({
    title,
    value,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <View className="w-full h-16 px-4 rounded-2xl border-2 border-secondary-300 flex flex-row items-center">
                <TextInput
                    className="flex-1 text-secondary-200 font-psemibold text-base"
                    value={value}
                    placeholder={title}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialCommunityIcons
                            name={showPassword ? "eye-off" : "eye"}
                            size={24}
                            color="#7B7B8B"
                        />
                    </TouchableOpacity>
                )}

            </View>
        </View>
    );
};

export default FormField;