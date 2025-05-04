import { Pressable, View } from 'react-native';
import Text from 'src/ui/Text.tsx';
import useViewerContext from 'src/user/useViewerContext.tsx';

export default function Two() {
  const { logout } = useViewerContext();

  return (
    <View className="flex-column flex-1 p-4">
      <Pressable onPress={logout}>
        <Text className="text-[5vh]">
          <fbt desc="Two header title">Logout</fbt>
        </Text>
      </Pressable>
    </View>
  );
}
