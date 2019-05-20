import React from "react";

import { AppRegistry, StyleSheet, Dimensions, View, Text } from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapMarker from "react-native-maps/lib/components/MapMarker";


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

}


class Map extends React.Component<Props, State> {

    constructor(props) {

        super(props);


        this.state = {

            latitude: 0,

            longitude: 0,

            error: null,

        };
    }
        componentDidMount(){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("wokeeey");
                    console.log(position);
                    this.setState({
                        curLat: position.coords.latitude,
                        curLong: position.coords.longitude,
                        error: null,
                    });
                },
                (error) => this.setState({ error: error.message }),
                { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
            );
        }



    render() {


        const origin = {latitude: this.props.olat , longitude: this.props.olong };
        const destination = {latitude: this.props.dlat , longitude: this.props.dlong};

        if (!!this.state.longitude & this.state.latitude ){
            return "";
        }

        return (
            <MapView style={styles.map} initialRegion={{
                latitude: this.state.curLat,
                longitude: this.state.curLong,
                latitudeDelta: 1,
                longitudeDelta: 1
            }}
            mapType={"standard"}
            showsMyLocationButton={true}

            >


                {this.props.olong && this.props.olat && <MapMarker coordinate={origin}/>}
                {this.props.dlong && this.props.dlat && <MapMarker coordinate={destination}/>}

                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    mode={this.props.mode || 'driving'}
                    apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                />


            </MapView>


        );

    }

}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        bottom:0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        top: 80,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
    },

});



export default Map;