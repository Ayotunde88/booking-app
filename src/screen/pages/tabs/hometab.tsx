import React, { useEffect, useState } from 'react';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { SearchBar } from '@rneui/themed';
import { Text, Card, Button, Skeleton } from '@rneui/base';
import { BottomSheet, ListItem } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AllCategoryTabs from '../partials/toptab'
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
  ActivityIndicator,
  Pressable
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import testimage1 from '../../../images/testimage1.png';
import testimage2 from '../../../images/testimage2.png';
import testimage3 from '../../../images/testimage3.jpeg';
import bell from '../../../images/bell.png';
import hotelofm from '../../../images/hotelofm.jpeg';
import HotelTab from '../partials/hoteltab';
import HotelModal from '../partials/modals/hotel'
// import {  } from 'react-native-elements';
interface HometabProps {
  navigation: any;
}


const Hometab: React.FC<PropsWithChildren<HometabProps>> = ({ navigation }): React.JSX.Element => {
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
    <ScrollView bounces={false}
      overScrollMode="never" style={[styles.safeArea, backgroundStyle]} showsHorizontalScrollIndicator={false}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.appTitleHeader}>
          <View style={styles.containerAppTitle}>
            <Text style={[styles.header, styles.appTitle]}>Bookns</Text>
            <Pressable style={styles.notification}>
              {/* <Icon name={'notifications-outline'} size={30} color={'#fff'} /> */}
              <Image source={bell} style={styles.notificationicon}></Image>
            </Pressable>
          </View>
          <SearchBar
            placeholder="Search Places..."
            onChangeText={updateSearch}
            value={search} round={true} lightTheme={true}
            containerStyle={{
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              margin:5,
            }}
            inputContainerStyle={{
              padding: 3,
              backgroundColor: '#e6e5e3',
            }}
          />
        </View>
        <View>
          <Text style={styles.header}>Recent Search</Text>
        </View>
        <View style={styles.resentSearchContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={[styles.resentSearch]}><Text style={styles.recentSearchText}>London</Text></Pressable>
            <Pressable style={styles.resentSearch}><Text style={styles.recentSearchText}>London</Text></Pressable>
            <Pressable style={styles.resentSearch}><Text style={styles.recentSearchText}>London</Text></Pressable>
            <Pressable style={styles.resentSearch}><Text style={styles.recentSearchText}>London</Text></Pressable>
          </ScrollView>
        </View>
        <View style={styles.view}>
          <View>
            <Text style={styles.header}>Category</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Pressable>
              <View style={[styles.category, styles.categorycolor1]}>
                <Icon name={'bed-outline'} size={45} color={'#398761'} />
              </View>
              <Text style={styles.categoryText}>Hotels</Text>
            </Pressable>
            <Pressable>
              <View style={[styles.category, styles.categorycolor2]}>
                <Icon name={'home-outline'} size={45} color={'#7658a3'} />
              </View>
              <Text style={styles.categoryText}>Spaces</Text>
            </Pressable>
            <Pressable>
              <View style={[styles.category, styles.categorycolor3]}>
                <Icon name={'car-outline'} size={45} color={'#486dc2'} />
              </View>
              <Text style={styles.categoryText}>Car Rental</Text>
            </Pressable>
            <Pressable>
              <View style={[styles.category, styles.categorycolor4]}>
                <Icon name={'airplane-outline'} size={45} color={'#d47e33'} />
              </View>
              <Text style={styles.categoryText}>Tour</Text>
            </Pressable>
          </View>
          <View>
            <Text style={styles.header}>Popular Places</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable>

              <View style={styles.card}>
                <ImageBackground source={testimage1} style={styles.image}>
                  <View style={styles.captionContainer}>
                    <Text style={styles.caption}>Explore London</Text>
                  </View>
                </ImageBackground>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.card}>
                <ImageBackground source={testimage2} style={styles.image}>
                  <View style={styles.captionContainer}>
                    <Text style={styles.caption}>Explore Madrid</Text>
                  </View>
                </ImageBackground>
              </View>
            </Pressable>
            <Pressable>

              <View style={styles.card}>
                <ImageBackground source={testimage3} style={styles.image}>
                  <View style={styles.captionContainer}>
                    <Text style={styles.caption}>Explore New York</Text>
                  </View>
                </ImageBackground>
              </View>
            </Pressable>
          </ScrollView>
          <View>
            <Text style={styles.viewall}>View All Popular Place <Icon name={'arrow-forward-outline'} size={20}></Icon></Text>
          </View>
          <View>
            <Text style={styles.header}>Best of the Month</Text>
          </View>
          <View style={styles.vendorofthemonthcard}>
            <Image source={hotelofm} style={styles.vendorofthemonthimage} />
            <View style={styles.vendorofthemonthcardBody}>
              <Text style={styles.vendorofthemonthtitle}>Hotel Canada</Text>
              <Text style={styles.vendorofthemonthtext}>Comfort is best</Text>
            </View>
          </View>
          
        </View>
      </ScrollView>
      {/* <View>
          <AllCategoryTabs/>
        </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    // color: '#ffffff',
    fontWeight: '700',
    fontSize: 25,
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
    justifyContent: 'flex-end'
  },
  notificationicon: {

  },
  appTitleHeader: {
    // backgroundColor: '#2a6af5',
    paddingBottom: 15,
  },
  resentSearchContainer: {
    textAlign: 'center',
    margin: 10,
  },

  resentSearch: {
    backgroundColor: '#575653',
    // backgroundColor: '#e8e8e8',
    borderColor: '#ababab',
    borderWidth: 0.2,
    borderRadius: 50,
    padding: 10,
    width: 100,
    textAlign: 'center',
    alignItems: 'center',
    // color: '#4d4c4a',
    color: '#fff',
    fontSize: 14,
    margin: 5,
  },
  recentSearchText:{
    color:'#fff',
    // backgroundColor: '#000',
  },
  safeArea: {
    flex: 1,
    // padding:10,
  },
  wrapper: {
    backgroundColor: '#fff',
    color: '#fff'
  },
  header: {
    color: '#403e47',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 20,
    margin: 10,
    fontWeight: '300',
  },
  view: {
    margin: 7,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  card: {
    width: 150,
    height: 250,
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
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  captionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 5,
    height: '100%',
  },
  caption: {
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 15,
  },
  category: {
    padding: 14,
    margin: 10,
    backgroundColor: '#464cbd',
    borderRadius: 10,
  },
  categorycolor1: {
    backgroundColor: '#a1cfb9',
    // backgroundColor: 'transparent',
  },
  categorycolor2: {
    backgroundColor: '#c4aee6',
    // backgroundColor: 'transparent',
  },
  categorycolor3: {
    backgroundColor: '#acc4fa',
    // backgroundColor: 'transparent',
  },
  categorycolor4: {
    backgroundColor: '#edb27e',
    // backgroundColor: 'transparent',
  },
  categoryText: {
    textAlign: 'center',
  },
  viewall: {
    // borderColor:'#8a8884',
    // borderWidth:1,
    color: '#d47e33',
    backgroundColor: '#fcdcca',
    padding: 5,
    width: 200,
    textAlign: 'center',
    borderRadius: 5,
    fontWeight:'700',
    fontSize: 15,
    margin: 0,
    marginTop: 15,
  },
  vendorofthemonthcard: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
  },
  vendorofthemonthimage: {
    width: '100%',
    height: 200,
  },
  vendorofthemonthcardBody: {
    padding: 15,
  },
  vendorofthemonthtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vendorofthemonthtext: {
    fontSize: 14,
    // color: '#666',
    color: '#398761',
    backgroundColor: '#c5edd7',
    width:120,
    borderRadius:5,
    textAlign:'center',
    padding:4,
  },
});

export default Hometab;
