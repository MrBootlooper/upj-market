import React, { useState, useCallback } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import Colors from '../../colors';
import { Text } from 'native-base';
import Orders from './Orders'; 
import Profile from './Profile';

const renderScene = SceneMap({
  first: Profile,
  second: Orders, // Menggunakan komponen Orders
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'PROFILE',
    },
    {
      key: 'second',
      title: 'ORDERS',
    },
  ]);

  const handleTabChange = useCallback((index) => {
    setIndex(index);
  }, []);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => <Text style={{ color, ...styles.text }}>{route.title}</Text>}
    />
  );

  return <TabView navigationState={{ index, routes }} renderScene={renderScene} onIndexChange={handleTabChange} initialLayout={{ width: layout.width }} renderTabBar={renderTabsBar} onAnimatedValueUpdate={() => {}} />;
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
