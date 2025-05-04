import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import Text from 'src/ui/Text.tsx';
import useViewerContext from 'src/user/useViewerContext.tsx';

export default function Login() {
  const router = useRouter();
  const { login } = useViewerContext();

  const onPress = useCallback(async () => {
    await login();
    router.replace('/');
  }, [login, router]);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center p-4">
        <Pressable className="w-full" onPress={onPress}>
          <Text className="w-full text-center text-[5vh]">
            <fbt desc="Login button">Login</fbt>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
