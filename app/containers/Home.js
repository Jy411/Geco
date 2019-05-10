import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Playground from "./Playground";
import TravelHistory from "./TravelHistory";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";


class Home extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <View style={{backgroundColor: 'yellow'}}></View>
                </Row>
                <Row>
                    <View style={{backgroundColor: 'orange'}}></View>
                </Row>
            </Grid>
        )
    }
}

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home",
                tabBarLabel: "Home",
                tabBarColor: "#768a67",
                tabBarIcon: <Icon size={24} name="home" color={"#FFFFFF"}/>,
                // tabBarIcon: <Icon size={24} name="home"/> ,
            }
        },
        Playground: {
            screen: Playground,
            navigationOptions: {
                title: "Playground",
                tabBarLabel: "Playground",
                tabBarColor: "#81A171",
                tabBarIcon: <Icon size={24} name="houzz" color={"#FFFFFF"}/> ,
            }
        },
        Profile: {
            screen: TravelHistory,
            navigationOptions: {
                title: "Travel History",
                tabBarLabel: "Travel History",
                tabBarColor: "#4F5D4F",
                tabBarIcon: <Icon size={24} name="houzz" color={"#FFFFFF"}/> ,
            }
        },
    },
    {
        initialRouteName: 'Home',
        shifting: true,
        labeled: true,
        activeColor: '#FFFFFF', // changes label color
        // inactiveColor: '#e064ee',
        // barStyle: {backgroundColor: '#81A171'},
    },
);

export default createAppContainer(TabNavigator);
