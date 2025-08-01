import { Slot } from 'expo-router';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { View } from 'react-native';

function ThemedSlot() {
  const { mode } = useTheme();

  return (
    <View className={mode === 'dark' ? 'bg-black flex-1' : 'bg-white flex-1'}>
      <Slot />
    </View>
  );
}

const RootLayout = () => {
  return (
    <ThemeProvider>
      <ThemedSlot />
    </ThemeProvider>
  )
}

export default RootLayout