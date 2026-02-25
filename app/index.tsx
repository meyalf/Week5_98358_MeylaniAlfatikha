import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Avatar, Card } from "react-native-paper";
import userData from "../data.json";

export default function App() {
    return (
        <>
            <Stack.Screen options={{ title: "User List" }} />
            <ScrollView style={{ padding: 10, backgroundColor: "#f5f5f5" }}>
                {userData.map((users, index) => (
                    <Card key={index} style={{ marginBottom: 10, borderRadius: 12 }}>
                        <Card.Title
                            title={users.name}
                            subtitle={users.email}
                            left={() => (
                                <Avatar.Image
                                    size={48}
                                    source={{ uri: users.photo_url }}
                                />
                            )}
                        />
                    </Card>
                ))}
            </ScrollView>
        </>
    );
}