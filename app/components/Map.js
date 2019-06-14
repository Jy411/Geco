import React from "react";
import {ButtonGroup, Button, Badge} from 'react-native-elements';
import {AppRegistry, StyleSheet, Dimensions, View, Text, Platform, Alert } from "react-native";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapMarker from "react-native-maps/lib/components/MapMarker";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import SQLite from "react-native-sqlite-storage";

type Props = {};

type State = {
    showList:boolean,
    lat:number,
    long:number,
    type:string;
    color:string;
    color2:string;
    distance:number;
    duration:number;
    origin:string;
    selectedIndex: number,
    reward:number,
    earned:number,
    oLat:number;
    oLong:number;
    dLat:number;
    dLong:number;
    dExists:boolean;
    startShow:boolean;
    totalPoints:number;
    totalDistance:number;

};

const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

class Map extends React.Component<Props, State> {

    constructor(props) {

        super(props);


        this.state = {

            reward:0,
            earned:0,
            color:'lightgreen',
            color2:'pink',
            showList:true,
            lat:0,
            lang:0,
            distance:0,
            duration:0,
            type:'not rewarded',
            selectedIndex: 0,
            oLat: 0,
            oLong: 0,
            dLat: 0,
            dLong: 0,
            error:null,
            origin:'',
            startShow:true,
            dExists: false,
            showGroup:true,
            totalPoints:0,
            totalDistance:0,
        };
        this.updateIndex = this.updateIndex.bind(this);
        this.startJourney = this.startJourney.bind(this);
        this.endJourney = this.endJourney.bind(this);


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
            { enableHighAccuracy: true, timeout: 3000 },
        );
        this.setState({oLat:this.state.lat,oLong: this.state.long});
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE uid=?', [1], (tx, results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    this.setState({ totalPoints:row.points, totalDistance:row.distance});
                }
                else
                    Alert.alert('a', 'not')
            });
        });
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        // Alert.alert(selectedIndex.toString());
    }
    getFare(duration:number, distance:number, selectedIndex) {

        if (selectedIndex=== 0){
            if (distance >= 1) {
                return duration + distance * 0.5 ;
            }
            else
                return 0;

        }
        else if (selectedIndex === 1) {
            if (distance >= 1) {
                return (duration) + (distance*2) ;
            }
            else
                return 0;
        }
        else{
            if (distance >= 1) {
                return (duration) + (distance*1.2);
            }
            else
                return 0;
        }

    }
    startJourney (){
        navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 300 },
        );
        this.setState({color:'blue', reward:Math.round(this.getFare(this.state.duration,this.state.distance, this.state.selectedIndex) ), startShow:false});
    }
    endJourney (){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 3000 },
        );

        if (this.state.lat.toFixed(2) === this.state.dLat.toFixed(2) && this.state.long.toFixed(2) === this.state.dLong.toFixed(2)){
            this.setState({type:'rewarded', color2:'blue', dExists:false, startShow:true})
            Alert.alert('Congratulations!', 'You have earned ' + this.state.reward + ' points');

            db.transaction((tx) => {
                tx.executeSql('UPDATE user SET points=?, distance=?  WHERE uid=?', [this.state.reward+this.state.totalPoints, this.state.distance+this.state.totalDistance,1], (tx,result) =>{
                });
            });
            var insert = 'INSERT INTO trips (origin, destination, duration, distance, uid, points) VALUES (?,?,?,?,?,?)';
            db.transaction((tx) => {
                tx.executeSql( insert, [ this.state.oLat.toString() + ', ' + this.state.oLong.toString(), this.state.dLat.toString() + ', ' + this.state.dLong.toString() , this.state.duration,this.state.distance,1, this.state.reward], (tx,result) =>{
                    Alert.alert('inserted');
                }, error => {Alert.alert('e', error)});
            });
        }
        else{
            this.setState({type:'not rewarded', color2:'red'})
        }
    }

    render() {
        const origin = {latitude: this.state.lat, longitude: this.state.long};
        const destinations = {latitude: this.state.dLat, longitude: this.state.dLong};
        const buttons = ['Carpooling', 'Walking', 'Bicycling'];
        const { selectedIndex } = this.state.selectedIndex;
        var n = new Date(0,0);
        n.setSeconds(+this.state.duration * 60 * 60);

        return (
                <View style={{left: 0, right: 0, bottom: 0, height:'100%'}}>

                    {/*<Text style={{top:80, position:'absolute'}}>{" Trip duration: " + n.toTimeString().slice(0, 8) + "\t Points earned: " + Math.round(this.getFare(this.state.duration,this.state.distance, this.state.selectedIndex) ) + "\n Distance: " + this.state.distance + " km " + "\t Reward: " + this.state.reward }</Text>*/}
                    {/*<Text style={{top:100, position:'absolute'}}>{this.state.distance}</Text>*/}
                    {/*<Text style={{top:60, position:'absolute'}}>{"curLat:" +this.state.lat + " \t curLong: " + this.state.long + "\n dLat: "+this.state.dLat + ' \t dLong: ' + this.state.dLong}</Text>*/}
                    {/*<Text style={{top:140, position:'absolute'}}>{this.state.distance * 10 * this.state.duration}</Text>*/}

                    {this.state.startShow && <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{ left:0, right:20,top:120, height: 40, width:"100%",position:'absolute'}}  />}

                    <GooglePlacesAutocomplete
                        placeholder='Enter Location'
                        minLength={2}
                        autoFocus={false}
                        listViewDisplayed={this.state.showList}
                        returnKeyType={'default'}
                        fetchDetails={true}
                        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                            this.setState({destination: details.formatted_address, dLat:details.geometry.location.lat, dLong:details.geometry.location.lng, dExists:true, showList:false })
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
                    <MapView style={styles.map}
                             initialRegion={{
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

                        <MapMarker title={'You are here!'} coordinate={{latitude:this.state.lat, longitude:this.state.long}} />


                        {this.state.dExists === true && <MapMarker title={'Destination'} coordinate={destinations}/>}


                        {this.state.dExists && this.state.selectedIndex === 0 && <MapViewDirections
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


                        {this.state.dExists && this.state.selectedIndex === 1 &&  <MapViewDirections
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

                        {this.state.dExists && this.state.selectedIndex === 2 && <MapViewDirections
                            origin={origin}
                            destination={this.state.destination}
                            apikey={'AIzaSyAXB4arZesKpFxvYR8ZhE0zxhMJ5SZjjl8'}
                            mode={'walking'}
                            strokeWidth={3}
                            strokeColor="blue"
                            onReady={(result) => {
                                this.setState({duration:result.duration/60, distance:result.distance})
                            }}
                        />}
                    </MapView>
                    {this.state.dExists && <View style={{top: 50, left:10, position:'absolute', flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center', width:'100%'}}>
                        <Badge value={this.state.distance.toFixed(2) + ' \n km'} status="primary" containerStyle={{position:'absolute', left:0}} badgeStyle={{height:70,width:90}} textStyle={{fontSize:20, alignContent: 'center'}} />
                        <Badge value={n.toTimeString().slice(0, 8) + ' \n ETA'} status="primary" containerStyle={{position:'absolute', left:100}} badgeStyle={{height:70}} textStyle={{fontSize:20, alignContent: 'center'}} />
                        <Badge value={Math.round(this.getFare(this.state.duration,this.state.distance, this.state.selectedIndex)) + ' \n points'} status="primary" containerStyle={{position:'absolute', left:210}} badgeStyle={{height:70, width:90}} textStyle={{fontSize:20, alignContent: 'center'}} />
                        <Badge value={this.state.reward + ' \n points'} status="primary" containerStyle={{position:'absolute', left:310}} badgeStyle={{height:70, width:90}} textStyle={{fontSize:20, alignContent: 'center'}} />
                    </View>}
                    {this.state.dExists && <View style={{bottom: 180, right: 0, position:'absolute', flex:1, flexDirection:'column', alignContent:'flex-end', justifyContent:'flex-end', width:80}}>
                        {this.state.startShow && <Button title={'Start'} onPress={this.startJourney} color={this.state.color} containerStyle={{marginRight:20, color:this.state.color}} >Press</Button>}
                        {!this.state.startShow && <Button title={'End'} onPress={this.endJourney} color={this.state.color2} containerStyle={{marginRight:20, color:this.state.color2}} >Press</Button>}
                    </View>}
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
