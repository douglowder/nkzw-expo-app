import { View } from 'react-native';
import Text from 'src/ui/Text.tsx';

export default function Index() {
  return (
    <>
      <View className="flex-column flex-1 items-center justify-center gap-4 p-4">
        <Text className="text-center text-[5vh] font-bold color-purple">
          <fbt desc="Greeting">Welcome</fbt>
        </Text>
        <Text className="text-center text-[3vh]">
          <fbt desc="Tagline">Modern, sensible defaults, fast.</fbt>
        </Text>
        <View className="flex-row items-center justify-center gap-1">
          <Text className="text-center text-[3vh]">
            <fbt desc="Live update message">
              Change{' '}
              <View className="border-hairline translate-y-[8px] rounded border-purple bg-grey p-1">
                <Text className="text-[2vh]">
                  src/app/(app)/(tabs)/index.tsx
                </Text>
              </View>{' '}
              for live updates.
            </fbt>
          </Text>
        </View>
      </View>
    </>
  );
}
