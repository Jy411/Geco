

import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Map from "./Map";

type State = {

    origin:string;
    oLat:string;
    oLong:string;
    destination:string;
    dLat:string;
    dLong:string;
};

class HomeScreen extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            oLat: '',
            oLong: '',
            destination: '',
            dLat: '',
            dLong: '',
        };

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <GooglePlacesAutocomplete
                    placeholder='Enter Location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        this.setState({ origin: details.formatted_address, oLat:details.geometry.location.lat, oLong:details.geometry.location.lng })
                    }}
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8',
                        language: 'en', // language of the results
                    }}
                    styles={{
                        container:{
                            top:0,
                            width:'100%',
                            height:80,
                            position:'absolute'
                        },
                        textInputContainer: {
                            height:44,
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth:0,
                            width:"100%"
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                    }}
                    currentLocation={false}
                />
                <GooglePlacesAutocomplete
                    placeholder='Enter Location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'default'}
                    fetchDetails={true}
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8',
                        language: 'en', // language of the results
                    }}
                    styles={{
                        container:{
                            top:44,
                            width:'100%',
                            height:80,
                            position:'absolute'
                        },
                        textInputContainer: {
                            top:40,
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth:0,
                            width:"100%"
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                    }}
                    currentLocation={false}
                />

                <Map mode={"driving"} olong={this.state.oLat} olat={this.state.oLong} dlong={""} dlat={""}/>
            </View>
        );
    }
}

class MapScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Map!</Text>
            </View>
        );
    }
}


class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Map: MapScreen,
    Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);