import React from "react";

import { AppRegistry, StyleSheet, Dimensions, View, Text } from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapMarker from "react-native-maps/lib/components/MapMarker";


type Props = {
    olong:number;
    olat:number;
    dlong:number;
    dlat:number;
}

class Map extends React.Component<Props> {

    constructor(props) {

        super(props);


        this.state = {

            latitude: null,

            longitude: null,

            error:null,

        };

    }


    render() {
        const origin = {latitude: this.props.olat || 0, longitude: this.props.olong || 0};
        const destination = {latitude: this.props.dlat || 0, longitude: this.props.dlong ||0};
        return (

            <MapView style={styles.map} initialRegion={{
                latitude: 3.0630348,
                longitude: 101.614712,
                latitudeDelta: 1,
                longitudeDelta: 1
            }}
            mapType={"standard"}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
            >

                {!!this.state.latitude && !!this.state.longitude && <MapView.Marker

                    coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}

                    title={"Your Location"}

                />}
                {origin && <MapMarker coordinate={origin}/>}
                {destination && <MapMarker coordinate={destination}/>}
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

        top: 120,

        left: 0,

        right: 0,

        bottom: 0,

        justifyContent: 'flex-end',

        alignItems: 'center',

    },

    map: {



        top: 120,

        left: 0,

        right: 0,

        bottom: 0,
        width:'100%',
        height:'100%',
    },

});



export default Map;