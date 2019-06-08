import React from "react";
import {ButtonGroup} from 'react-native-elements';
import {AppRegistry, StyleSheet, Dimensions, View, Text, Platform, Alert} from "react-native";

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
    selectedIndex: number,
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
            type:'driving',
            selectedIndex: 0,
            oLat: 0,
            oLong: 0,
            dLat: 0,
            dLong: 0,
            error:null,
            destination:'',

            dExists: false,
        };
        this.updateIndex = this.updateIndex.bind(this)

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
    updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        Alert.prompt('Selected', selectedIndex.toString());
    }

    render() {
        const origin = {latitude: this.state.lat, longitude: this.state.long};
        const destinations = {latitude: this.state.dLat, longitude: this.state.dLong};
        const buttons = ['Car', 'Walking', 'Transit'];
        const { selectedIndex } = this.state.selectedIndex;

        return (
                <View style={{left: 0, right: 0, bottom: 0}}>

                    <Text style={{top:80, position:'absolute'}}>{this.state.duration}</Text>
                    <Text style={{top:100, position:'absolute'}}>{this.state.distance}</Text>
                    {/*<Text style={{top:120, position:'absolute'}}>{this.state.distance * 3 * this.state.duration}</Text>*/}
                    {/*<Text style={{top:140, position:'absolute'}}>{this.state.distance * 10 * this.state.duration}</Text>*/}
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{ left:0, right:20,top:120, height: 40, width:"100%",position:'absolute'}} />
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


                        {this.state.dExists === true && <MapMarker coordinate={destinations}/>}



                        {this.state.selectedIndex === 0 && <MapViewDirections
                            origin={origin}
                            destination={this.state.destination}
                            apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                            mode={'driving'}
                            strokeWidth={3}
                            strokeColor="blue"
                            onReady={(result) => {
                                this.setState({duration:result.duration/60, distance:result.distance})
                            }}

                        />}


                        {this.state.selectedIndex === 1 &&  <MapViewDirections
                            origin={origin}
                            destination={this.state.destination}
                            apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                            mode={'walking'}
                            onReady={(result) => {
                                this.setState({duration:result.duration/60, distance:result.distance})
                            }}
                            strokeWidth={3}
                            strokeColor="blue"
                        />}
                        {this.state.selectedIndex === 2 && <MapViewDirections
                            origin={origin}
                            destination={this.state.destination}
                            apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                            mode={'transit'}
                            strokeWidth={3}
                            strokeColor="blue"
                            onReady={(result) => {
                                this.setState({duration:result.duration/60, distance:result.distance})
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

        bottom: 0,
        width:'100%',
        height:'80%',
    },

});



export default Map;