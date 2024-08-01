import React, { useState } from 'react';
import { BottomSheet, ListItem, Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import type { PropsWithChildren } from 'react';

interface HotelModalProps {
  navigation: any;
}

const HotelModal: React.FC<PropsWithChildren<HotelModalProps>> = ({ navigation }): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isVisible, setIsVisible] = useState(false);

  const list = [
    { title: 'List Item 1', onPress: () => setIsVisible(false) },
    { title: 'List Item 2', onPress: () => setIsVisible(false) },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
        <View style={styles.container}>
          {/* <Button
            title="Open Bottom Sheet"
            onPress={() => setIsVisible(true)}
            buttonStyle={styles.button}
          /> */}
          <BottomSheet modalProps={{}} isVisible={isVisible}>
            {list.map((l, i) => (
              <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                <ListItem.Content>
                  <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
  },
});

export default HotelModal;
