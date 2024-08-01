import * as React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
interface SkeletonProps {
  navigation: any;
}

const Skeleton: React.FC<PropsWithChildren<SkeletonProps>> = ({ navigation }): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <SkeletonPlaceholder speed={2000}>
            <SkeletonPlaceholder.Item width={100} height={40} borderRadius={4} />
          </SkeletonPlaceholder>

          <SkeletonPlaceholder speed={2000}>
            <SkeletonPlaceholder.Item
              width={80}
              height={40}
              borderRadius={4}
            />
          </SkeletonPlaceholder>

          <SkeletonPlaceholder speed={2000}>
            <SkeletonPlaceholder.Item width={80} height={40} borderRadius={4} />
          </SkeletonPlaceholder>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#fff',
    // backgroundColor:'#1a73e8',
    color: '#fff'
  },
  header: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 16,
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },

});

export default Skeleton;
