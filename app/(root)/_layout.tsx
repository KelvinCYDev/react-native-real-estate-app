import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/lib/global-provider";

export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Slot />
      </ScrollView>
    </SafeAreaView>
  );
}
