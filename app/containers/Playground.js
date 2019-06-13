import React, { Component } from 'react';
import {View, Text, Button, StatusBar, Alert} from 'react-native';
import Map from '../components/Map';




type Props = {};

type State = {
    oLat:string;
    oLong:string;
    dLat:string;
    dLong:string;
    totalP:number;
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


