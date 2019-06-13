import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Row, Grid } from "react-native-easy-grid";

import { homeStyle } from "../styles/style";

import Playground from "./Playground";
import ProfileContainer from "./Profile";
import DisplayProfile from "../components/DisplayProfile";
import TotalPoints from "../components/TotalPoints";
import DistanceAchievementsTracker from "../components/DistanceAchievementsTracker";
import PointsHistory from "../components/PointsHistory";
import TravelStats from "../components/TravelStats";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Guy Who Hates Straws',
            totalPoints: 2000,
        };

    }

    // a function and a prop it will receive
    // states can be used to change prop
    changeUsername(newName) {
        this.setState({username: newName})
    }


    render() {

        return (

            <ScrollView style={homeStyle.scrollView}>
                <Grid>
                    <Row size={1}>
                        {/* This view is in a row */}
                        <View style={[homeStyle.centerChildren, homeStyle.setViewWidth]}>
                            <DisplayProfile/>
                            <Text style={homeStyle.avatarText}>{this.state.username}</Text>
                        </View>
                        {/* This view is in a row */}
                    </Row>

                    <Row>
                        <View style={[homeStyle.centerChildren, homeStyle.setViewWidth]}>
                            {/* This is where the card points component is stored */}
                            <TotalPoints totalPoints={this.state.totalPoints}/>
                            <DistanceAchievementsTracker/>
                            <PointsHistory/>
                            <TravelStats/>
                            {/* This is where the card points component is stored */}
                        </View>
                    </Row>
                </Grid>

            </ScrollView>
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
            }
        },
        Playground: {
            screen: Playground,
            navigationOptions: {
                title: "Playground",
                tabBarLabel: "Playground",
                tabBarColor: "#81A171",
                tabBarIcon: <Icon size={24} name="map" color={"#FFFFFF"}/> ,
            }
        },
        Profile: {
            screen: ProfileContainer,
            navigationOptions: {
                title: "Profile",
                tabBarLabel: "Profile",
                tabBarColor: "#4F5D4F",
                tabBarIcon: <Icon size={24} name="user" color={"#FFFFFF"}/> ,
                tabBarOnPress: ({navigation}) => {
                    console.log('onPress:', navigation.state.routeName);
                    navigation.navigate('Profile', {
                        tPnts: 20000,
                    });
                },
            }
        },
    },
    {
        initialRouteName: 'Home',
        shifting: true,
        labeled: true,
        activeColor: '#FFFFFF', // changes label color
    },
);

export default createAppContainer(TabNavigator);
