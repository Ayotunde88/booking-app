import * as React from 'react';
import type { PropsWithChildren } from 'react';

import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View, Platform, PermissionsAndroid
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import image1 from '../../images/booking1.png';
import image2 from '../../images/booking2.png';
import image3 from '../../images/booking3.png';
interface OnboardingScreenProps {
  navigation: any;
}

const OnboardingScreen: React.FC<PropsWithChildren<OnboardingScreenProps>> = ({ navigation }): React.JSX.Element => {
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
      <Swiper style={styles.wrapper} showsButtons={false} dotColor="lightgray"
        activeDotColor="#ff7900"
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}>
        <View style={styles.slide}>
          <Image source={image1} style={styles.image} />
          <Text style={styles.title}>Welcome To Bookns</Text>
          <Text style={styles.subtitle}>Book Hotels, Cars, Boats with Ease.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Text style={styles.onboardingScreenbutton}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <Image source={image3} style={styles.image} />
          <Text style={styles.title}>Discover Best Tours</Text>
          <Text style={styles.subtitle}>Find and book the best places to stay and explore.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Text style={styles.onboardingScreenbutton}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <Image source={image2} style={styles.image} />
          <Text style={styles.title}>Get A Ride to Events</Text>
          <Text style={styles.subtitle}>Rent cars and book events seamlessly.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Text style={styles.onboardingScreenbutton}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
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
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    color: '#fff'
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    fontFamily: 'Poppins-Regular',
    // fontWeight: 'bold',
  },
  onboardingScreenbutton: {
    borderColor: 'none',
    backgroundColor: '#2a6af5',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    // fontWeight:'bold',
    fontSize: 20,
    padding: 15,
    width: 320,
    height: 60,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 25,
  }
});

export default OnboardingScreen;
