import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Text, StatusBar, Image, Button } from 'react-native';
import Map from "./Map";

import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Place from "./Place";


type Props = {};
type State = {
    text:string;
    location:string;
    lat:string;
    long:string;
};
export default class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            location: '',
            lat: '',
            long: ''
        };
    }

    render() {
        return (
                <View style={styles.container} key="1">

                <Place/>
                </View>

        );
    }



}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIntro: {
        fontFamily: 'SFCompactDisplayBold',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#43A047',
        alignSelf: 'center',
    },
    containerView: {
        justifyContent: 'center',
        flex: 1,
    },
    colorView: {
        justifyContent: 'center',
    },
    centerIcon: {
        alignSelf: 'center',
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