import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Text, StatusBar, Image, Button } from 'react-native';
import Map from "./Map";

import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";


type Props = {};
type State = {
    text:string;
    location:string;
    lat:string;
    long:string;
    text2:string;
    location2:string;
    lat2:string;
    long2:string;
    showSearch: boolean;
    showSearch2: boolean;
    showButton: boolean;
};
export default class Place extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            location: '',
            lat: '',
            long: '',
            text2: '',
            location2: '',
            lat2: '',
            long2: '',
            showSearch: true,
            showSearch2: true,
            showButton: true,
        };

        this.onPress = this.onPress.bind(this);

    }
    onPress () {
        return ;
    }


    render() {

        return (
            <View style={styles.container} key="1">
                {this.state.showSearch && <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { this.setState({ location: details.formatted_address, text: details.name, lat:details.geometry.location.lat, long:details.geometry.location.lng, showSearch:false })}}

                    styles={{
                        container:{
                            top:0,
                            height:70,
                        },
                        description: {
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                            backgroundColor: 'white',
                        },
                        textInputContainer: {
                            top: 0,
                            borderBottomWidth: 0,
                            borderTopWidth: 0,
                            height: 40,
                            width: '100%'
                        },
                        textInput: {
                            backgroundColor: 'white',
                            borderBottomWidth: 0.1,

                        },
                        listView: {
                            height:40,
                            marginTop: 40,
                            elevation: 1,
                            backgroundColor: 'white',
                            position: 'absolute',

                        },
                    }}

                    currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'food',
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

                    predefinedPlacesAlwaysVisible={true}
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyDk_EdmU4iDVLdsvfyl8tCIiJZPz9Us4pk',
                        language: 'en', // language of the results

                    }}

                />}
                {this.state.showSearch2 && <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { this.setState({ location2: details.formatted_address, text2: details.name, lat2:details.geometry.location.lat, long2:details.geometry.location.lng, showSearch2:false })}}

                    styles={{
                        container:{
                            top:40,
                            left:0,
                            position:'absolute',
                            height:70,
                        },
                        description: {
                            left:0,
                            fontWeight: 'bold',
                            backgroundColor: 'white',
                        },
                        predefinedPlacesDescription: {
                            left:0,
                            color: '#1faadb',
                            backgroundColor: 'white',
                        },
                        textInputContainer: {
                            top: 40,
                            left:0,
                            borderBottomWidth: 0,
                            borderTopWidth: 0,
                            height: 40,
                            width: '100%',
                            position:'absolute',
                        },
                        textInput: {
                            left:0,
                            top: 40,
                            backgroundColor: 'white',
                            borderBottomWidth: 0.1,

                        },
                        listView: {
                            
                            elevation: 1,
                            backgroundColor: 'white',
                            position: 'absolute',

                        },
                    }}

                    currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'food',
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

                    predefinedPlacesAlwaysVisible={true}
                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyDk_EdmU4iDVLdsvfyl8tCIiJZPz9Us4pk',
                        language: 'en', // language of the results

                    }}

                />}

                {/*<TextInput*/}
                {/*    style={{height: 40, position:"absolute", top:0, right:20}}*/}
                {/*    placeholder="Origin address"*/}
                {/*    onChangeText={(text) => this.setState({text})}*/}
                {/*/>*/}
                {/*<Button title={"enter"} onPress={this.handleButton()} />*/}

                <Text style={{height: 40, fontSize: 32, position:"absolute", top:0}}>
                    {this.state.text}
                </Text>

                <Text style={{height: 40, fontSize: 32, position:"absolute", top:40}}>
                    {this.state.text2}
                </Text>

                {!!this.state.showButton && <Map dlong={parseFloat(this.state.long2)} dlat={parseFloat(this.state.lat2)} olat={parseFloat(this.state.lat)} olong={parseFloat(this.state.long)}/>}




            </View>

        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
});

{/*<StatusBar backgroundColor="#66BB6A" barStyle="light-content" />*/}
{/*    <Grid>*/}
{/*        <Col size={1}></Col>*/}
{/*        <Col size={4}>*/}
{/*            <Row size={1}></Row>*/}
{/*            <Row size={4}>*/}
{/*                <View style={styles.containerView}>*/}
{/*                    <Text style={styles.textIntro}>Welcome to Geco. Take part in making the world a better place.</Text>*/}
{/*                </View>*/}
{/*            </Row>*/}
{/*            <Row size={1}>*/}
{/*                <Grid>*/}
{/*                    <Col size={1}></Col>*/}
{/*                    <Col size={1}>*/}
{/*                        <View style={styles.colorView}>*/}
{/*                            <Icon style={styles.centerIcon} color='#43A047' name="circle" size={20}/>*/}
{/*                        </View>*/}
{/*                    </Col>*/}
{/*                    <Col size={1}>*/}
{/*                        <View style={styles.colorView}>*/}
{/*                            <Icon style={styles.centerIcon} color="#C8E6C9" name="circle" size={20}/>*/}
{/*                        </View>*/}
{/*                    </Col>*/}
{/*                    <Col size={1}>*/}
{/*                        <View style={styles.colorView}>*/}
{/*                            <Icon style={styles.centerIcon} color="#C8E6C9" name="circle" size={20}/>*/}
{/*                        </View>*/}
{/*                    </Col>*/}
{/*                    <Col size={1}></Col>*/}
{/*                </Grid>*/}
{/*            </Row>*/}
{/*        </Col>*/}
{/*        <Col size={1}></Col>*/}
{/*    </Grid>*/}
{/*</View>*/}
{/*<View style={styles.container} key="2">*/}
{/*    <Grid>*/}
{/*        <Col size={1}></Col>*/}
{/*        <Col size={4}>*/}
{/*            <Row size={1}></Row>*/}
{/*            <Row size={4}>*/}
{/*                <View style={styles.containerView}>*/}
{/*                    <Text style={styles.textIntro}>Geco helps you by measuring your carbon footprint.</Text>*/}
{/*                </View>*/}
{/*            </Row>*/}
{/*            <Row size={1}>*/}
{/*                <Grid>*/}
{/*                    <Col size={1}></Col>*/}
{/*                    <Col size={1}>*/}
{/*                        <View style={styles.colorView}>*/}
{/*                            <Icon style={styles.centerIcon} color='#C8E6C9' name="circle" size={20}/>*/}
{/*                        </View>*/}
{/*                    </Col>*/}
{/*                    <Col size={1}>*/}
{/*                        <View style={styles.colorView}>*/}
{/*                            <Icon style={styles.centerIcon} color="#43A047" name="circle" size={20}/>*/}
{/*                        </View>*/}
{/*                    </Col>*/}
{/*                    <Col size={1}>*/}
{/*                        <View style={styles.colorView}>*/}
{/*                            <Icon style={styles.centerIcon} color="#C8E6C9" name="circle" size={20}/>*/}
{/*                        </View>*/}
{/*                    </Col>*/}
{/*                    <Col size={1}></Col>*/}
{/*                </Grid>*/}
{/*            </Row>*/}
{/*        </Col>*/}
{/*        <Col size={1}></Col>*/}
{/*    </Grid>*/}