import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Button, TextInput} from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Home from './app/containers/Home';

import SQLite from "react-native-sqlite-storage";
import {Input} from "react-native-elements";

/* Initial screen, this is the first page which loads. On first run, it will display an intro slider.
*  The actual screen have a BottomNavBar for users to navigate around the different screens.
*  */
type State = {
    showRealApp:boolean;
    uid:number;
    username:string;
    pass:string;
    text:string,
};

const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

export default class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            text:'',
            pass:'',
            showRealApp: false,
            uid:0,
        };
        changeNavigationBarColor("#388E3C");
        StatusBar.setBackgroundColor("#388E3C");
        this.guestLogin = this.guestLogin.bind(this);
        this.login = this.login.bind(this);
    }

    login (name:string, pass:string){
        db.transaction(tx => {
            tx.executeSql(
                `SELECT uid,name,pass FROM user`,
                [],
                (tx, results) => {
                    for(var i=0; i<results.rows.length; i++){
                        var row = results.rows.item(i);
                        if (row.name === name){
                            if (row.pass === pass){
                                this.setState({uid:row.uid});
                                break;
                            }
                        }
                    }
                }
            )
        });
    }

    guestLogin (){
        this.setState({showRealApp:true})
    }

    render() {
        if (this.state.showRealApp === false) {
            return (
                <View style={{alignContent: 'center', backgroundColor:'lightGreen'}}>
                    <View style={{width: '50%', alignContent: 'center', position: 'absolute', top: 100, left: 100}}>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Enter username"
                            onChangeText={(text) => this.setState({username:text})}
                        />
                        <TextInput
                            style={{height: 40}}
                            placeholder="Enter password"
                            onChangeText={(text) => this.setState({pass:text})}
                        />

                    </View>
                    <View style={{width: '30%', alignContent: 'center', position: 'absolute', top: 300, left: 150}}>
                        <Button title={'Check'} onPress={this.login(this.state.username, this.state.pass)}/>

                        <Button title={'Login'} onPress={this.guestLogin}/>
                        {/*<Button title={'Guest'} onPress={this.guestLogin}/>*/}
                    </View>

                </View>

            )
        }
        else {
            return (
                <Home userId={this.state.uid}/>
            )
        }
    }
}
