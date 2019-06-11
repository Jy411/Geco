import React, { Component } from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {Input, Icon} from "react-native-elements";
import Map from '../components/Map';


type Props = {};

type State = {};


export class Login extends Component<Props, State> {
    constructor(props) {
        super(props);


    }

    guestLogin (){

    }
    render() {

        return (
            <View>
                {/*<Input*/}
                {/*    placeholder='BASIC INPUT'*/}
                {/*/>*/}

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
                <Button title={'Guest'} onPress={''}/>
            </View>


        )
    }
}

export default Login;


