import React, { Component } from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import Map from '../components/Map';

type Props = {};

type State = {
    oLat:string;
    oLong:string;
    dLat:string;
    dLong:string;
}


export class Playground extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            oLat: '',
            oLong: '',
            dLat: '',
            dLong: '',
        };

    }
    render() {

        return (
            <View>
                <Map/>
            </View>


        )
    }
}

export default Playground;


