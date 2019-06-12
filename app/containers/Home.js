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

type Props = {
    userId:number;
};

type State = {
    id:number;
    username:string;
    name:string;
    totalPoint:number;
    totalDistance:number;
    walkD:number;
};

class Home extends Component <Props,State>{
    constructor(props) {
        super(props);
        this.state = {
            id:1,
            username: 'Guy Who Hates Straws',
            name: 'a ' ,
            totalPoint: 0,
            totalDistance:0,
            walkD:0,
        };


    }

    // a function and a prop it will receive
    // states can be used to change prop
    changeUsername(newName) {
        this.setState({username: newName})
    }
    componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        this.setState({id:this.props.userId});

    }

    componentDidMount(): void {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE uid=?', [this.state.id], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    this.setState({name:row.name + ' ' + row.surname, totalPoint:row.points, totalDistance:row.distance});
                }
                else
                    Alert.alert('a', 'not')
            });
        });
        db.transaction((tx) => {
            tx.executeSql('SELECT SUM(distance) as sum FROM trips WHERE uid=?', [1], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    this.setState({walkD:row.sum});
                }
                else
                    Alert.alert('a', 'not');
            }, error => {
                Alert.alert('a', error)
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
                            <TotalPoints totalP={this.state.totalPoint}/>
                            <DistanceAchievementsTracker totalDis={this.state.totalDistance}/>
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
