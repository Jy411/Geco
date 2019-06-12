import React, { Component } from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {Input, Icon} from "react-native-elements";
import Map from '../components/Map';
import SQLite from "react-native-sqlite-storage";
import Home from "./Home";


type Props = {};

type State = {};

const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

export class Login extends Component<Props, State> {
    constructor(props) {
        super(props);


        this.guestLogin = this.guestLogin.bind(this);
    }

    guestLogin (){
        React.goToPage('Home');
    }
    logIn (){

    }
    signUp (){

    }
    render() {

        return (
            <View>
                <Input
                    label='Username'
                    placeholder='Enter your name'
                />
                <Input
                    label='Password'
                    placeholder='Enter your password'
                />

                {/*<Input*/}
                {/*    placeholder='INPUT WITH ICON'*/}
                {/*    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}*/}
                {/*/>*/}

                {/*<Input*/}
                {/*    placeholder='INPUT WITH CUSTOM ICON'*/}
                {/*    leftIcon={*/}
                {/*        <Icon*/}
                {/*            name='user'*/}
                {/*            size={24}*/}
                {/*            color='black'*/}
                {/*        />*/}
                {/*    }*/}
                {/*/>*/}

                {/*<Input*/}
                {/*    placeholder='INPUT WITH SHAKING EFFECT'*/}
                {/*    shake={true}*/}
                {/*/>*/}

                {/*<Input*/}
                {/*    placeholder='INPUT WITH ERROR MESSAGE'*/}
                {/*    errorStyle={{ color: 'red' }}*/}
                {/*    errorMessage='ENTER A VALID ERROR HERE'*/}
                {/*/>*/}


                <Button title={'Login'} onPress={this.guestLogin}/>
                <Button title={'Sign up'} onPress={this.guestLogin}/>
                <Button title={'Guest'} onPress={this.guestLogin}/>
            </View>


        )
    }
}

export default Login;


