import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/Health';
import SportScreen from './screens/Sports';
import TechScreen from './screens/Tech';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon type="feather" name="home" color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon type="feather" name="dollar-sign" color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon type="feather" name="heart" color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Sports"
          component={SportScreen}
          options={{
            tabBarIcon: props => (
              <Icon
                type="ionicon"
                name="tennisball-outline"
                color={props.color}
              />
            )
          }}
        />
        <Tab.Screen
          name="Tech"
          component={TechScreen}
          options={{
            tabBarIcon: props => (
              <Icon
                type="ionicon"
                name="hardware-chip-outline"
                color={props.color}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
