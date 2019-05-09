import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GoogleMaps from '../components/GoogleMaps';

export class Home extends Component {
    render() {
        return (
            <View>
                <GoogleMaps/>
            </View>
        )
    }
}

export default Home
