import { ActivityIndicator, Text } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Localhost() {
  const router = useRouter();

  useFocusEffect(() => {
    router.replace("/");
  });

  return (
    <SafeAreaView className="bg-white h-full flex justify-center items-center">
      <ActivityIndicator className="text-primary-300" size="large" />
    </SafeAreaView>
  );
}
