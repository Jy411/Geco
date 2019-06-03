import React from "react";

import {AppRegistry, StyleSheet, Dimensions, View, Text, Platform} from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapMarker from "react-native-maps/lib/components/MapMarker";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";


type State = {
    lat:number,
    long:number,
    type:string;
    distance:number;
    duration:number;
    destination:string;
    oLat:number;
    oLong:number;
    dLat:number;
    dLong:number;
    dExists:boolean;
}


class Map extends React.Component<Props, State> {

    constructor(props) {

        super(props);


        this.state = {
            lat:0,
            lang:0,
            distance:0,
            duration:0,
            type:'',


            oLat: 0,

            oLong: 0,

            dLat: 0,

            dLong: 0,
            error:null,
            destination:'',

            dExists: false,
        };

    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 30000 },
        );
    }

    render() {
        const origin = {latitude: this.state.lat, longitude: this.state.long};
        const destinations = {latitude: this.state.dLat, longitude: this.state.dLong};
        return (
                <View style={{width:'100%'}}>

                    <Text style={{bottom:40, position:'absolute'}}>{this.state.duration}</Text>
                    <Text style={{bottom:80, position:'absolute'}}>{this.state.distance}</Text>
                    <GooglePlacesAutocomplete
                        placeholder='Enter Location'
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'default'}
                        fetchDetails={true}
                        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                            this.setState({destination: details.formatted_address, dLat:details.geometry.location.lat, oLong:details.geometry.location.lng, dExists:true })

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

                    />
                    {/*<GooglePlacesAutocomplete*/}
                    {/*    placeholder='Enter Location'*/}
                    {/*    minLength={2}*/}
                    {/*    autoFocus={false}*/}
                    {/*    returnKeyType={'default'}*/}
                    {/*    fetchDetails={true}*/}
                    {/*    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true*/}
                    {/*        this.setState({ destination: details.formatted_address, dLat:details.geometry.location.lat, oLong:details.geometry.location.lng, dExists:true })*/}
                    {/*    }}*/}
                    {/*    query={{*/}
                    {/*        // available options: https://developers.google.com/places/web-service/autocomplete*/}
                    {/*        key: 'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8',*/}
                    {/*        language: 'en', // language of the results*/}
                    {/*    }}*/}
                    {/*    styles={{*/}
                    {/*        container:{*/}
                    {/*            top:44,*/}
                    {/*            width:'100%',*/}
                    {/*            height:80,*/}
                    {/*            position:'absolute'*/}
                    {/*        },*/}
                    {/*        textInputContainer: {*/}
                    {/*            top:80,*/}
                    {/*            backgroundColor: 'rgba(0,0,0,0)',*/}
                    {/*            borderTopWidth: 0,*/}
                    {/*            borderBottomWidth:0,*/}
                    {/*            width:"100%"*/}
                    {/*        },*/}
                    {/*        textInput: {*/}
                    {/*            marginLeft: 0,*/}
                    {/*            marginRight: 0,*/}
                    {/*            height: 36,*/}
                    {/*            color: '#5d5d5d',*/}
                    {/*            fontSize: 16*/}
                    {/*        },*/}
                    {/*        predefinedPlacesDescription: {*/}
                    {/*            color: '#1faadb'*/}
                    {/*        },*/}
                    {/*    }}*/}
                    {/*    currentLocation={false}*/}
                    {/*/>*/}
                    <MapView style={styles.map} initialRegion={{
                        latitude: this.state.lat,
                        longitude: this.state.long,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                             zoomEnabled={true}
                             showsCompass={true}
                             mapType={"standard"}
                             showsMyLocationButton={true}
                             showsPointsOfInterest={true}
                    >

                        <MapMarker coordinate={{latitude:this.state.lat, longitude:this.state.long}} />


                        {this.state.dExists && <MapMarker coordinate={{latitude:this.state.dLat, longitude:this.state.dLong}}/>}



                        <MapViewDirections
                            origin={origin}
                            destination={this.state.destination}
                            apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                            mode={'driving'}
                            onReady={(result) => {
                                this.setState({duration:result.duration, distance:result.distance})
                            }}
                        />

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

        bottom: 0,
        width:'100%',
        height:'80%',
    },

});



export default Map;