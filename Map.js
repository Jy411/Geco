import React from "react";

import { AppRegistry, StyleSheet, Dimensions, View, Text } from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";


const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};


class Map extends React.Component {

    constructor(props) {

        super(props);


        this.state = {

            latitude: null,

            longitude: null,

            error:null,

        };

    }





    render() {

        return (

            <MapView style={styles.map} initialRegion={{

                latitude: 37.3318456,
                longitude: -122.0296002,
                latitudeDelta: 1,
                longitudeDelta: 1

            }}>

                {!!this.state.latitude && !!this.state.longitude && <MapView.Marker

                    coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}

                    title={"Your Location"}

                />}

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