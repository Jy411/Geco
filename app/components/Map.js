import React from "react";

import { AppRegistry, StyleSheet, Dimensions, View, Text } from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapMarker from "react-native-maps/lib/components/MapMarker";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";


type State = {
    type:string;
    distance:number;
    duration:number;
    destination:string;
    origin:string;
    oLat:number;
    oLong:number;
    dLat:number;
    dLong:number;
    oExists:boolean;
    dExists:boolean;
}


class Map extends React.Component<Props, State> {

    constructor(props) {

        super(props);


        this.state = {
            distance:0,
            duration:0,
            type:'',
            origin:'',

            oLat: 0,

            oLong: 0,

            dLat: 0,

            dLong: 0,
            error:null,
            destination:'',
            oExists: false,
            dExists: false,
        };

    }

    render() {
        const origin = {latitude: this.state.oLat, longitude: this.state.oLong};
        const destinations = {latitude: this.state.dLat, longitude: this.state.dLong};
        return (
                <View style={{width:'100%'}}>
                    <Text style={{top:40, position:'absolute'}}>{this.state.duration}</Text>
                    <Text style={{top:80, position:'absolute'}}>{this.state.distance}</Text>
                    <GooglePlacesAutocomplete
                        placeholder='Enter Location'
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'default'}
                        fetchDetails={true}
                        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                            this.setState({ origin: details.formatted_address, oLat:details.geometry.location.lat, oLong:details.geometry.location.lng, oExists:true })

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
                        currentLocation={true}
                    />
                    <GooglePlacesAutocomplete
                        placeholder='Enter Location'
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'default'}
                        fetchDetails={true}
                        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                            this.setState({ destination: details.formatted_address, dLat:details.geometry.location.lat, oLong:details.geometry.location.lng, dExists:true })
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
                    <MapView style={styles.map} initialRegion={{
                        latitude: 3.0630348,
                        longitude: 101.614712,
                        latitudeDelta: 1,
                        longitudeDelta: 1
                    }}

                             showsCompass={true}
                             mapType={"standard"}
                             showsMyLocationButton={true}
                             showsPointsOfInterest={true}
                    >


                        {this.state.oExists && <MapMarker coordinate={{latitude:this.state.oLat, longitude:this.state.oLong}} />}

                        {this.state.oExists && this.state.dExists && <MapMarker coordinate={{latitude:this.state.dLat, longitude:this.state.dLong}}/>}

                        {this.state.oExists && this.state.dExists &&

                        <MapViewDirections
                            origin={this.state.origin}
                            destination={this.state.destination}
                            apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                            mode={'driving'}
                            onReady={(result) => {
                                this.setState({duration:result.duration, distance:result.distance})
                            }}
                        />}

                    </MapView>
                </View>

        );

    }

}



const styles = StyleSheet.create({

    container: {
        position: 'absolute',

        top: 170,

        left: 0,

        right: 0,

        bottom: 120,

        justifyContent: 'flex-end',

        alignItems: 'center',

    },

    map: {



        top: 170,

        left: 0,

        right: 0,

        bottom: 120,
        width:'100%',
        height:'100%',
    },

});



export default Map;