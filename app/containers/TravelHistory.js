import {Alert, ScrollView, Text, View} from 'react-native';
import React, { Component } from 'react';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'
import SQLite from "react-native-sqlite-storage";
import TotalPoints from "../components/TotalPoints";

import { homeStyle } from "../styles/style";
import DistanceAchievementsTracker from "../components/DistanceAchievementsTracker";
import PointsHistory from "../components/PointsHistory";
import TravelStats from "../components/TravelStats";
import {Grid, Row} from "react-native-easy-grid";
import DisplayProfile from "../components/DisplayProfile";

const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

type State = {
    ready:boolean;
    ready2:boolean;
    title:string;
    title2:string;
    title3:string;
    desc:string;
    desc2:string;
    desc3:string;
    cost:number;
    cost2:number;
    cost3:number;
    totalP:number;
}


class TravelHistory extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            // To determine whether to show the introduction sliders
            title:'',
            title2:'',
            title3:'',
            desc:'',
            desc2:'',
            desc3:'',
            cost:0,
            cost2:0,
            cost3:0,
            totalP:0,
            ready:false,
            ready2:false,
        };

    }

    componentDidMount(): void {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM offer where oid>=?', [0], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    var row2 = results.rows.item(1);
                    var row3 = results.rows.item(2);
                    this.setState({
                        title:row.vendor,
                        desc:row.desc,
                        cost:row.cost,
                        title2:row2.vendor,
                        desc2:row2.desc,
                        cost2:row2.cost,
                        title3:row3.vendor,
                        desc3:row3.desc,
                        cost3:row3.cost,
                        ready2:true,
                    });
                }
                else
                    Alert.alert('a', 'not')
            });
        });
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE uid=?', [1], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    this.setState({totalP:row.points, ready:true});
                }
                else
                    Alert.alert('a', 'not')
            });
        });
    }

    checkAvailability  (cost:number, current:number)  {
        if (cost>current){
            Alert.alert('Oops!', 'Not enough points to redeem. Please collect more points');
        }
        else {
            Alert.alert('Yay', 'You did it!');
            db.transaction((tx) => {
                tx.executeSql('UPDATE user  SET points=?,  WHERE uid=?', [current-cost,1], (tx,result) =>{
                });
            });
        }
    }

    render() {

        return (
                    <ScrollView style={homeStyle.scrollView}>

                                <View style={[homeStyle.centerChildren, homeStyle.setViewWidth]}>
                                    <TotalPoints totalP={this.state.totalP}/>

                                </View>
                        <Card >
                            <Text style={{marginBottom: 10}}>
                                {this.state.title + ' \n' + this.state.desc}
                            </Text>
                            {this.state.ready && this.state.ready2 && <Button
                                backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title={'Claim for ' + this.state.cost}
                                onPress={this.checkAvailability(this.state.cost, this.state.totalP)}
                            />}
                        </Card>
                        <Card >
                            <Text style={{marginBottom: 10}}>
                                {this.state.title2 + ' \n' + this.state.desc2}
                            </Text>
                            {this.state.ready && this.state.ready2 &&<Button
                                backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title={'Claim for ' + this.state.cost2}
                                onPress={this.checkAvailability(this.state.cost2, this.state.totalP)}
                            />}
                        </Card>
                        <Card >
                            <Text style={{marginBottom: 10}}>
                                {this.state.title3 + ' \n' + this.state.desc3}
                            </Text>
                            {this.state.ready && this.state.ready2 &&<Button
                                backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title={'Claim for ' + this.state.cost3}
                                onPress={this.checkAvailability(this.state.cost3, this.state.totalP)}
                            />}
                        </Card>


                    </ScrollView>





        )
    }
}

export default TravelHistory;
