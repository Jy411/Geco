import React, {Component} from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Input, Button } from "react-native-elements";
import { Row, Grid } from "react-native-easy-grid";

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './app/containers/Home';

import changeNavigationBarColor from 'react-native-navigation-bar-color';

import SQLite from "react-native-sqlite-storage";
import AppIntroSlider from "react-native-app-intro-slider";
import {homeStyle, slides} from "./app/styles/style";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

/* Initial screen, this is the first page which loads. On first run, it will display an intro slider.
*  The actual screen have a BottomNavBar for users to navigate around the different screens.
*  */

// type State = {
//     showRealApp:boolean;
//     uid:number;
//     username:string;
//     pass:string;
//     text:string,
// };

const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: true, // to determine whether the app is shown or not
            username:'',
            text:'',
            pass:'',
            uid:0,
        };
        /* To delete the database as app loads it from cache */
        // SQLite.deleteDatabase({name: 'geco.db', location: 'default'});
        changeNavigationBarColor("#388E3C");
        StatusBar.setBackgroundColor("#388E3C");
        this.login = this.login.bind(this);
    }

    // Login function which checks the DB and compares with values from TextInput
    login = (name:string, pass:string) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT uid,name,pass FROM user`,
                [],
                (tx, results) => {
                    for(var i=0; i<results.rows.length; i++){
                        var row = results.rows.item(i);
                        if (row.name === name && row.pass === pass){
                            /* 1. Navigates to Home Screen and passes the userId prop */
                            this.props.navigation.navigate('HomeScreen',
                                {
                                    userId: row.uid
                                });
                            this.setState({uid:row.uid});
                            console.log('name: ' + name);
                            console.log('pass: ' + pass);
                            console.log(`rowUID: ${row.uid}`);
                            console.log(`rowName: ${row.name}`);
                            console.log(`rowPass: ${row.pass}`);
                        }
                    }
                }
            )
        });
    };

    _onDone = () => {this.setState({showRealApp: true})};

    render() {
        if (this.state.showRealApp === false) {
            return (
                <AppIntroSlider
                    slides={slides}
                    onDone={this._onDone}
                />
            )
        }
        else {
            return (
                <Grid>
                    <Row size={3}>

                        {/* Login Screen */}
                        <View style={[homeStyle.setViewWidth, {backgroundColor: 'rgb(109,195,129)', alignItems: 'center', justifyContent: 'center'}]}>
                            <Text style={{fontSize: 50, color: 'white'}}>Login</Text>

                            <Input
                                placeholder={'Username'}
                                placeholderTextColor={'grey'}
                                // label={'Username'}
                                containerStyle={{marginTop: 20, width: wp(70), borderRadius: 20 ,backgroundColor: 'white', marginBottom: 10}}
                                leftIcon={{ type: 'font-awesome', name: 'user-circle-o', size: 24, color: 'rgb(109,195,129)' }}
                                onChangeText={(text) => this.setState({username:text})}
                            />

                            <Input
                                placeholder={'Password'}
                                placeholderTextColor={'grey'}
                                // label={'Password'}
                                secureTextEntry={true}
                                containerStyle={{width: wp(70), borderRadius: 20 ,backgroundColor: 'white'}}
                                leftIcon={{ type: 'font-awesome', name: 'lock', size: 36, color: 'rgb(109,195,129)' }}
                                onChangeText={(text) => this.setState({pass:text})}
                            />

                            <Button
                                title={'Sign In'}
                                titleStyle={{
                                    color: 'rgb(109,195,129)'
                                }}
                                type={'outline'}
                                containerStyle={{
                                    width: wp(30),
                                    backgroundColor: 'white',
                                    marginTop: 20,
                                }}
                                buttonStyle={{
                                    borderRadius: 20
                                }}
                                // Runs login function
                                onPress={() => this.login(this.state.username, this.state.pass)}
                            />

                            <Button
                                title={'HACKER MODE'}
                                onPress={() => this.props.navigation.navigate('HomeScreen',
                                    {
                                        userId: 2
                                    })}
                            />

                        </View>
                    </Row>

                    <Row size={1}>
                        <View style={[homeStyle.setViewWidth, {backgroundColor: 'rgb(109,195,129)', alignItems: 'center', justifyContent: 'center'}]}></View>
                    </Row>
                </Grid>

            )
        }
    }
}

const RootStack = createStackNavigator(
    {
        IntroScreen: App,
        HomeScreen: Home,
    },
    {
        initialRouteName: 'IntroScreen',
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
