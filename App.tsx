/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import OnboardingScreen from './src/screen/onboarding/onboarding';
import { Skeleton } from '@rneui/themed';
import Homepage from './src/screen/pages/home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
