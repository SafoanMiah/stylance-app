import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the icon

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <MaterialCommunityIcons
                name={icon}  // Use the icon name from MaterialCommunityIcons
                size={30}
                color={color}
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#fff5d6",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#5c503a",
                        borderTopWidth: 1,
                        height: 70,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="home"  // Pass the icon name here (from MaterialCommunityIcons)
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    )
}

//change order and the add them

export default TabsLayout;
