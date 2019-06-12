import React, { Component } from 'react';
import {View, Text, Button, StatusBar, Alert} from 'react-native';
import Map from '../components/Map';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import changeNavigationBarColor from "react-native-navigation-bar-color/src";




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
            // To determine whether to show the introduction sliders
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


