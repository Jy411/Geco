import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
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
import PointsHistory from "../components/PointsHistory";
import TravelStats from "../components/TravelStats";
import SQLite from "react-native-sqlite-storage";
import {Button} from "react-native-elements";


const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Guy Who Hates Straws',
            name: 'a ' ,
        };


    }

    // a function and a prop it will receive
    // states can be used to change prop
    changeUsername(newName) {
        this.setState({username: newName})
    }
    componentDidMount(): void {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE uid=?', [1], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    this.setState({name:row.name + ' ' + row.surname});
                    Alert.alert('a', 'did')
                }
                else
                    Alert.alert('a', 'not')
            });
        });
    }

    render() {

        return (
            <ScrollView style={homeStyle.scrollView}>

                <Grid>
                    <Row size={1}>
                        {/* This view is in a row */}
                        <View style={[homeStyle.centerChildren, homeStyle.setViewWidth]}>
                            <DisplayProfile/>
                            <Text style={homeStyle.avatarText}>{this.state.name}</Text>
                        </View>
                        {/* This view is in a row */}
                    </Row>

                    <Row>
                        <View style={[homeStyle.centerChildren, homeStyle.setViewWidth]}>
                            {/* This is where the card points component is stored */}
                            <TotalPoints/>
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
