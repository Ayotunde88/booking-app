import React, { useEffect, useState } from 'react';

import { SearchBar } from '@rneui/themed';
import { Text, Card, Button, Skeleton } from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import type { PropsWithChildren } from 'react';
import {
  Image,
  PermissionsAndroid,
  PermissionStatus,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View, Dimensions, FlatList, ScrollView,
  ImageBackground,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import testimage1 from '../../../images/space1.png';
import testimage2 from '../../../images/space2.png';
import testimage3 from '../../../images/space3.png';
// import {  } from 'react-native-elements';
interface SpaceTabProps {
  navigation: any;
}


const SpaceTab: React.FC<PropsWithChildren<SpaceTabProps>> = ({ navigation }): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateSearch = (search: React.SetStateAction<string>) => {
    setSearch(search);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    axios.get('http://10.0.2.2:8000/?format=json') // Replace with your API endpoint
      .then((response) => {
        console.log(response.data);
        setData(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
      <View style={styles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.card}>
            <Text style={styles.title}>Explore London</Text>
            <ImageBackground source={testimage1} style={styles.image}>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Explore Madrid</Text>
            <ImageBackground source={testimage2} style={styles.image}>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Explore New York</Text>
            <ImageBackground source={testimage3} style={styles.image}>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    color: '#ffffff',
  },
  containerAppTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    marginTop: 10,
  },
  notification: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  appTitleHeader: {
    backgroundColor: '#2a6af5',
    paddingBottom: 15,
  },
  safeArea: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#fff',
    color: '#fff',
  },
  header: {
    color: '#403e47',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 25,
    margin: 10,
    fontWeight: '900',
  },
  view: {
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  card: {
    width: 270,
    height: 200,
    marginTop: 15,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#349e7e',
    color: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SpaceTab;



