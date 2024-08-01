import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList, ActivityIndicator, useColorScheme, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import spacetestimage1 from '../../../images/space1.png';
import spacetestimage2 from '../../../images/space2.png';
import spacetestimage3 from '../../../images/space3.png';

const HotelTab = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    axios.get('http://10.0.2.2:8000/?format=json')
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

  // Render each card
  const renderItem = ({ item }) => (
    <Pressable>
        <View style={styles.card}>
        <Text style={styles.cardTitle}>Explore {item.location}</Text>
        <ImageBackground source={item.image} style={styles.image} />
        </View>
    </Pressable>
  );

  // Example data format
  const exampleData = [
    { id: '1', location: 'London', image: spacetestimage1 },
  ];

  return (
    <View style={[styles.view, backgroundStyle]}>
      <FlatList
        data={exampleData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    margin: 7,
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: 300, // Adjust width as needed
    height: 250, // Adjust height as needed
    margin: 7,
    borderRadius: 10,
    overflow: 'scroll',
    backgroundColor: '#fff',
    elevation: 4, // Add shadow for Android
    shadowColor: '#ccc', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: 'center',
    borderWidth: 1, // Debugging border
    borderColor: '#ccc', // Debugging border
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 16,
    color: '#000',
    height: 30,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'transparent', 
  },
});

export default HotelTab;
