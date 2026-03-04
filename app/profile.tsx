import { Link, useLocalSearchParams } from "expo-router";
import { Button, Image, Text, View } from "react-native";
import userData from "../data.json";

export default function profile() {
  const { userName } = useLocalSearchParams<{ userName: string }>();

  const user = userData.find((u) => u.name === userName);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {user && (
        <Image
          source={{ uri: user.photo_url }}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
      )}
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        {userName}'s Profile
      </Text>
      {user && (
        <Text style={{ color: "gray", marginBottom: 16 }}>{user.email}</Text>
      )}
      <Link href="/home" push asChild>
        <Button title="Go to Home Screen" />
      </Link>
    </View>
  );
}