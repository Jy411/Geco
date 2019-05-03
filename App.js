import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import changeNavigationBarColor, {
    HideNavigationBar,
    ShowNavigationBar,
} from 'react-native-navigation-bar-color';
import { Col, Row, Grid } from "react-native-easy-grid";
import ViewPager from "@react-native-community/viewpager";
import Icon from 'react-native-vector-icons/FontAwesome';
import Map from "./Map";


type Props = {};
export default class App extends Component<Props> {
    componentDidMount(): void {
        changeNavigationBarColor('#66BB6A');
    }

    render() {
        return (
            <ViewPager
                style={styles.viewPager}
                initialPage={0}>
                <View style={styles.container} key="1">

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
                <Map/>
                </View>
            </ViewPager>
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
    }
});
