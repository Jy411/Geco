import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Row, Grid } from "react-native-easy-grid";

import { homeStyle } from "../styles/style";

import Playground from "./Playground";
import TravelHistory from "./TravelHistory";
import DisplayProfile from "../components/DisplayProfile";
import TotalPoints from "../components/TotalPoints";
import DistanceAchievementsTracker from "../components/DistanceAchievementsTracker";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Guy Who Hates Straws',
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

                {/* First Row with avatar and avatar label */}
                <Grid>
                    <Row size={1}>
                        {/* This view is in a row */}
                        <View style={[homeStyle.centerChildren, homeStyle.setViewWidth, homeStyle.colorView]}>
                            <DisplayProfile/>
                            <Text style={homeStyle.avatarText}>{this.state.username}</Text>
                        </View>
                        {/* This view is in a row */}
                    </Row>
                </Grid>


                {/* Second Row */}
                <Grid>
                    <Row>
                        <View style={[homeStyle.centerChildren, homeStyle.setViewWidth]}>
                            {/* This is where the card points component is stored */}
                            <TotalPoints/>
                            <DistanceAchievementsTracker/>
                            {/* This is where the card points component is stored */}
                        </View>
                    </Row>
                </Grid>



            </ScrollView>
        )
    }
}

// Moved to style.js
// const homeStyle = StyleSheet.create({
//     scrollView: {
//         flex: 1,
//     },
//     centerChildren: {
//         alignItems: 'center', // center the children inside the view
//         paddingTop: hp(5),
//     },
//     setViewWidth: {
//         width: wp(100),
//     },
//     colorView: {
//         backgroundColor: 'brown', // set the background color of the view
//     },
//     avatarText: {
//         fontSize: 24,
//         color: 'white',
//     },
//
//
// });

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
    },
);

export default createAppContainer(TabNavigator);
