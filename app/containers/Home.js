import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Row, Grid } from "react-native-easy-grid";

import { homeStyle } from "../styles/style";

import Playground from "./Playground";
import DisplayProfile from "../components/DisplayProfile";
import TotalPoints from "../components/TotalPoints";
import DistanceAchievementsTracker from "../components/DistanceAchievementsTracker";
import PointsHistory from "../components/PointsHistory";
import TravelStats from "../components/TravelStats";
import SQLite from "react-native-sqlite-storage";

import ProfileContainer from "./Profile";

const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

// type Props = {
//     userId:number;
// };
//
// type State = {
//     id:number;
//     username:string;
//     name:string;
//     totalPoint:number;
//     totalDistance:number;
//     walkD:number;
// };

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
            name: 'Placeholder',
            totalPoint: 0,
            totalDistance:0,
            walkD:0,
        };
    }

    // componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
    //     this.setState({id:this.props.userId});
    // }

    componentWillMount() {
        /* 2. Gets the param userId from the login screen to determine which userId to use in SQL Query */
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 2);

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE uid=?', [userId], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    // Sets Name, Points and Total Distance depending on userId
                    this.setState({name:row.name + ' ' + row.surname, totalPoint:row.points, totalDistance:row.distance});
                    console.log(`Home.js totalPoints is: ${this.state.totalPoint}`);
                    console.log(`Home.js LOCALDB totalPoints is: ${row.points}`);
                }
            });
        });

        db.transaction((tx) => {
            // Gets sum of all distance travelled from the trips a userId has made
            tx.executeSql('SELECT SUM(distance) as sum FROM trips WHERE uid=?', [userId], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    this.setState({walkD:row.sum});
                }
            });
        });
    }

    componentDidUpdate() {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE uid=?', [userId], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    // Sets Name, Points and Total Distance depending on userId
                    this.setState({name:row.name + ' ' + row.surname, totalPoint:row.points, totalDistance:row.distance});
                    console.log(`UPDATEDHome.js totalPoints is: ${this.state.totalPoint}`);
                    console.log(`UPDATEDHome.js LOCALDB totalPoints is: ${row.points}`);
                }
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
                            <Text style={[homeStyle.avatarText, {marginTop: 10}]}>{this.state.name}</Text>
                        </View>
                        {/* This view is in a row */}
                    </Row>

                    <Row>
                        <View style={[homeStyle.centerChildren, homeStyle.setViewWidth]}>
                            {/* This is where the card points component is stored */}
                            <TotalPoints totalP={this.state.totalPoint}/>
                            <DistanceAchievementsTracker totalDist={this.state.totalDistance}/>
                            <PointsHistory/>
                            <TravelStats walkD={this.state.walkD}/>
                            {/* This is where the card points component is stored */}
                        </View>
                    </Row>
                </Grid>
            </ScrollView>
        )
    }
}


let TabNavigator = createMaterialBottomTabNavigator(
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
            navigationOptions: ({navigation}) => ({
                title: "Profile",
                tabBarLabel: "Profile",
                tabBarColor: "#4F5D4F",
                tabBarIcon: <Icon size={24} name="user" color={"#FFFFFF"}/> ,
                // This part does not work for some reason
                tabBarOnPress: ({navigation, defaultHandler}) => {
                    navigation.navigate('Profile',
                        {
                            userId: 2
                        });
                    defaultHandler();
                }
            })
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
