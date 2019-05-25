import React from "react";

import { AppRegistry, StyleSheet, Dimensions, View, Text, Alert, PermissionsAndroid } from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapMarker from "react-native-maps/lib/components/MapMarker";
import Geolocation from '@react-native-community/geolocation';

type Props = {
    mode:string;
    olong:number;
    olat:number;
    dlong:number;
    dlat:number;
}

type State = {

    curLat: number;
    curLong: number;
    latitude:number;
    longitude:number;
    watchID?: number;
}


class Map extends React.Component<Props, State> {

    constructor(props) {

        super(props);


        this.state = {
            watchID:null,
            latitude: 0,
            longitude: 0,

            error: null,

        };
    }

        componentDidMount(){

            const granted = PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
            if (granted) {
                Geolocation.getCurrentPosition(
                    position => {
                        this.setState({
                            curLat: position.coords.latitude,
                            curLong: position.coords.longitude,
                            error: null,
                        });
                    },
                    error => Alert.alert('Error', JSON.stringify(error)),
                    {enableHighAccuracy: true, timeout: 20000, maximumAge: 0},
                );
                this.watchID = Geolocation.watchPosition(position => {
                    this.setState({
                        curLat: position.coords.latitude,
                        curLong: position.coords.longitude,
                        error: null,
                    });
                });
            }
            else {
                console.log( "ACCESS_FINE_LOCATION permission denied" )
            }

        }
    componentWillUnmount() {
        this.watchID != null && Geolocation.clearWatch(this.watchID);
    }


    render() {


        const origin = {latitude: this.props.olat || 0, longitude: this.props.olong || 0};
        const destination = {latitude: this.props.dlat || 0, longitude: this.props.dlong ||0};


        return (
            <MapView
                showsUserLocation
                style={styles.map}
                initialRegion={{
                latitude: this.state.curLat,
                longitude: this.state.curLong,
                latitudeDelta: 1,
                longitudeDelta: 1

            }}
            showsMyLocationButton={true}
            >

                {!!this.state.latitude && !!this.state.longitude && <MapView.Marker

                    coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}

                    title={"Your Location"}

                />}

                <MapMarker title="You are here!" coordinate={{ latitude: this.state.curLat,
                    longitude: this.state.curLong}}/>
                {destination && <MapMarker title="Destination" coordinate={destination}/>}

                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                />


            </MapView>


        );

    }

}


const styles = StyleSheet.create({
    container: {

        position: 'absolute',

        top: 0,

        left: 0,

        right: 0,

        bottom: 0,

        justifyContent: 'flex-end',

        alignItems: 'center',

    },

    map: {

        position: 'absolute',

        top: 0,

        left: 0,

        right: 0,

        bottom: 0,

    },

});



export default Map;