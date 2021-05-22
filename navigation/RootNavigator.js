import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import screens
import Home from '../screens/Home';
import Rides from '../screens/Rides';
import History from '../screens/History';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home" 

        drawerContentOptions={{
          activeTintColor: '#ff751a',
          itemStyle: {padding: 0},
        }}>
              <Drawer.Screen name="Home" 
                     component={Home} 
                      options={{ 
                      drawerLabel: 'Home' ,
                      drawerIcon: ({color, size}) => (
                            <MaterialIcons name="home" color={color} size={size} />
                        ),
                    }}/>

              <Drawer.Screen 
                   name="Rides" 
                   component={Rides}
                    options={{ 
                      drawerLabel: 'Rides' ,
                      drawerIcon: ({color, size}) => (
                            <MaterialIcons name="directions-bike" color={color} size={size} />
                        ),
                    }}
                   />
              <Drawer.Screen 
                  name="History" 
                  component={History} 
                   options={{ 
                      drawerLabel: 'History',
                       drawerIcon: ({color, size}) => (
                            <MaterialIcons name="history" color={color} size={size} />
                        ),
                    }}
                  /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
