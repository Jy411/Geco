

import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Map from "./Map";

type State = {
    type:string;
    origin:string;
    oLat:string;
    oLong:string;
    destination:string;
    dLat:string;
    dLong:string;
    distance:number;
};

class HomeScreen extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            oLat: '',
            oLong: '',
            type: '',
            destination: '',
            dLat: '',
            dLong: '',
            distance:0,
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
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        this.setState({ destination: details.formatted_address, dLat:details.geometry.location.lat, dLong:details.geometry.location.lng })
                    }}
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
                            top:80,
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth:0,
                            width:"100%"
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 36,
                            color: '#5d5d5d',
                            fontSize: 16
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        },
                    }}
                    currentLocation={false}
                />
                <View style={styles.row}>
                    <Button title="Car" onPress={e => {this.setState({type:"driving"})} } style={styles.button}/>
                    <Button title="Bus" onPress={e => {this.setState({type:"bus"})} } style={styles.button}/>
                    <Button title="Bicycle" onPress={e => {this.setState({type:"cycling"})} } style={styles.button}/>
                    <Button title="Walk" onPress={e => {this.setState({type:"walking"})} } style={styles.button}/>
                </View>

                <Text
                style={{top: 160}}
            >
                {this.state.oLat}
            </Text>
                <Text
                    style={{top: 170}}
                >
                    {this.state.oLong}
                </Text>
                <Text
                    style={{top: 180}}
                >
                    {this.state.dLat}
                </Text>
                <Text
                    style={{top: 190}}
                >
                    {this.state.dLong}
                </Text>
                <Text
                    style={{top: 190}}
                >
                    {this.state.type}
                </Text>



            </View>
        );
    }
}

class MapScreen extends React.Component <Props, State> {
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
                <Text>Map!</Text>
                <Map mode={"driving"} olong={parseFloat(this.state.oLat)} olat={parseFloat(this.state.oLong)} dlong={parseFloat(this.state.dLat)} dlat={parseFloat(this.state.dLong)}/>
            </View>
        );
    }
}


class SettingsScreen extends React.Component <Props, State> {
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

const styles = StyleSheet.create({
    row: {
        position:'absolute',
        flex: 1,
        top: 200,
        flexDirection: 'row',
        height: 40,
        width:"100%",
        justifyContent: 'space-around'
    },
    button: {
        position:'absolute',
        backgroundColor: 'green',
        width: '30%'
    },
    button2: {
        top: 300,
        position:'absolute',
        backgroundColor: 'green',
        height: 40,
        width: '30%'
    }
});