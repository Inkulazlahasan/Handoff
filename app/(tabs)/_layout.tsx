import { Tabs } from "expo-router";
<<<<<<< HEAD
import { House as Home, Plus, User, Shield } from "lucide-react-native";
=======
import { Chrome as Home, Plus, MessageCircle, User, Shield } from "lucide-react-native";
>>>>>>> b87634541d4cd96c63876b9b589c09bf2e1db5ec
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuthStore } from "@/stores/authStore";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const { user } = useAuthStore();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1e40af",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e5e7eb",
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8, // 👈 dynamic padding
          paddingTop: 8,
          height: 65 + insets.bottom, // 👈 ensures space above nav bar
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="post-ad"
        options={{
          title: "Post Ad",
          tabBarIcon: ({ size, color }) => <Plus size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
<<<<<<< HEAD
          href: null, // Hide from tab bar
=======
          title: "Chat",
          tabBarIcon: ({ size, color }) => (
            <MessageCircle size={size} color={color} />
          ),
>>>>>>> b87634541d4cd96c63876b9b589c09bf2e1db5ec
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
        }}
      />
<<<<<<< HEAD
=======
      <Tabs.Screen
        name="admin"
        options={{
          title: "Admin",
          tabBarIcon: ({ size, color }) => <Shield size={size} color={color} />,
          href: user?.role === 'admin' ? undefined : null,
        }}
      />

>>>>>>> b87634541d4cd96c63876b9b589c09bf2e1db5ec
    </Tabs>
  );
}
