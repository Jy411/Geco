import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Playground from "./Playground";
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home",
                tabBarIcon: <Icon size={24} name="home" style={{color: 'white'}}/> ,
                barStyle: {backgroundColor: '#388E3C'},
            }
        },
        Playground: {
            screen: Playground,
            navigationOptions: {
                title: "Playground",
                tabBarIcon: <Icon size={24} name="houzz" style={{color: 'white'}}/> ,
                barStyle: {backgroundColor: '#008e66'},
            }
        },
    },
    {
        defaultNavigationOptions: {
            shifting: true,
            labeled: true,
            initialRouteName: 'Home',
            activeColor: '#f0edf6',
            inactiveColor: '#004365',
            barStyle: { backgroundColor: '#8c008e' },
        }
    },
);

export default createAppContainer(TabNavigator);
