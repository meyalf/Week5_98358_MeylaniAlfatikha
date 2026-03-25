import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import Animated, { FadeInDown } from "react-native-reanimated";
import styles from "../AppStyles";
import userData from "../data.json";

export default function userList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((users, index) => (
        <Animated.View
          key={index}
          entering={FadeInDown.delay(index * 200).duration(500)}
        >
          <Card style={styles.card}>
            <Link
              href={{
                pathname: "/profile",
                params: { userName: users.name },
              }}
              push
              asChild
            >
              <TouchableOpacity style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <Avatar.Image
                    size={70}
                    source={{ uri: users.photo_url }}
                  />
                  <View style={styles.textContainer}>
                    <Text variant="titleMedium">{users.name}</Text>
                    <Text variant="bodyMedium">{users.email}</Text>
                  </View>
                </Card.Content>
              </TouchableOpacity>
            </Link>
          </Card>
        </Animated.View>
      ))}
    </ScrollView>
  );
}