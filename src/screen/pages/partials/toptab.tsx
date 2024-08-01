import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar, TabBarProps } from 'react-native-tab-view';
import HotelTab from './hoteltab';
import { ScrollView } from 'react-native-gesture-handler';

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <Text>Second Tab</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#4caf50' }]}>
    <Text>Third Tab</Text>
  </View>
);

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#03a9f4' }]}>
    <Text>Fourth Tab</Text>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: HotelTab,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

export default function AllCategoryTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Hotel' },
    { key: 'second', title: 'Spaces' },
    { key: 'third', title: 'Car Rental' },
    { key: 'fourth', title: 'Tour' },
  ]);

  const renderTabBar = (props: TabBarProps<any>) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      renderLabel={({ route, focused }) => (
        <View style={[styles.tab, focused ? styles.activeTab : null]}>
          <Text style={[styles.label, focused ? styles.activeLabel : null]}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
   
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbar: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  label: {
    color: '#000',
    textAlign: 'center',
  },
  tab: {
    width: (Dimensions.get('window').width / 4) - 8,
    height:40,
    marginHorizontal: 4,
    marginVertical: 6,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginTop:30,
    marginBottom:-10,
  },
  activeTab: {
    backgroundColor: '#2a6af5', // Active tab background color
  },
  activeLabel: {
    color: '#fff', // Active tab text color
  },
});
