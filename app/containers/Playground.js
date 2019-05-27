import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Map from '../components/Map';

export class Playground extends Component {

    render() {
        return (
            <View>
                <Text>Hi</Text>
                <Map olong={''} olat={''} dlong={''} dlat={''}/>
            </View>
            
                
        )
    }
}

export default Playground;
