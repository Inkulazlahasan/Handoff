import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/register" />
<<<<<<< HEAD
        <Stack.Screen name="auth/forgot-password" />
        <Stack.Screen name="auth/verify-code" />
        <Stack.Screen name="auth/reset-password" />
=======
>>>>>>> b87634541d4cd96c63876b9b589c09bf2e1db5ec
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="product/[id]" />
        <Stack.Screen name="chat/[userId]" />
        <Stack.Screen name="rating/[sellerId]" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}