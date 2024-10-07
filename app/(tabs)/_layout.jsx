import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // https://icons.expo.fyi/Index

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <MaterialCommunityIcons
                name={icon}  // Use the icon name from MaterialCommunityIcons
                size={30}
                color={color}
            />
        </View >
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "rgb(240, 234, 210)",
                    tabBarShowLabel: false,
                    headerShown: false, // NOT WORKING!!
                    tabBarStyle: {
                        backgroundColor: "rgb(173, 196, 120)",
                        height: 60,
                        paddingHorizontal: 20,
                        borderRadius: 25,
                        marginHorizontal: 15,
                        marginBottom: 10,
                        position: "absolute",
                        shadowColor: "#000000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 5,
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
                                icon="home" // Pass the icon name here (from MaterialCommunityIcons)
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="tinder"
                    options={{
                        title: "Tinder",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="cards"
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="category"
                    options={{
                        title: "Category",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="grid"
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="account"
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs >
        </>
    )
}


export default TabsLayout;
