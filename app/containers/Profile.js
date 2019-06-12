import {Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import React,{ Component } from 'react';

import { createStackNavigator, createAppContainer } from "react-navigation";

import { Col, Row, Grid } from "react-native-easy-grid";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

import {Card} from "react-native-elements";
import {cardStyles, profileStyle} from "../styles/style";
import FoodRedemptionModal from "../modal/FoodRedemptionModal";
import TransportationRedemptionModal from "../modal/TransportationRedemptionModal";
import ShoppingRedemptionModal from "../modal/ShoppingRedemptionModal";
import OthersRedemptionModal from "../modal/OthersRedemptionModal";

const foodIcon = require('../images/Groceries.png');
const shoppingIcon = require('../images/Shopping.png');
const transportIcon = require('../images/Sedan2.png');
const othersIcon = require('../images/Other.png');



class Profile extends Component {
    constructor(){
        super();
        this.state = {
            // totalPoints: props.totalPoints,
        };
        // const totalPoints = this.props.navigation.getParam('totalPoints');
        // console.log(totalPoints);
        console.log("=====");
    };


    render() {
        const { navigation } = this.props;
        const totalPoints = navigation.getParam('tPnts', 100);
        return (
            <ImageBackground
                style={{flex:1, height: hp(33), width: undefined}}
                source={require('../images/ProfileStock.jpg')}
                resizeMode="cover"
            >

                <Grid>
                    <Row size={4}>
                        {/*<View style={{width: wp(100), backgroundColor: 'rgb(175,126,136)'}}></View>*/}
                    </Row>
                    <Row size={2}>
                        <View style={{
                            justifyContent: 'center',
                            borderTopRightRadius: 25,
                            borderTopLeftRadius: 25,
                            width: wp(100),
                            backgroundColor: 'rgb(109,195,129)'}}>
                            <Text style={{fontSize: 30, color: 'white', paddingLeft: wp(5)}}>Mr. Annstone</Text>
                            <Text style={{fontSize: 20, color: 'white', paddingLeft: wp(5)}}>
                                {JSON.stringify(totalPoints)}
                            </Text>
                        </View>
                    </Row>
                    <Row size={1}>
                        <Col>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                                <Text style={{fontSize: 20, color: 'black'}}>redeem</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                                <Text style={{fontSize: 20, color: 'black'}}>profile</Text>
                            </View>
                        </Col>
                    </Row>
                    <Row size={6}>
                        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'rgb(109,195,129)'}}>
                            <Card
                                containerStyle={profileStyle.redemptionBoxContainer}
                                wrapperStyle={cardStyles.centerContainerItems}>
                                <Grid>
                                    <Col>
                                        <Row>
                                            <TouchableOpacity style={profileStyle.redemptionBox}
                                                              onPress={() => this.props.navigation.navigate('Food')}>
                                                <Image style={{width: 60}}
                                                       source={foodIcon}
                                                       resizeMode={'contain'}
                                                />
                                                <Text style={{fontSize: 18,bottom: 15}}>groceries</Text>
                                            </TouchableOpacity>
                                        </Row>
                                        <Row>
                                            <TouchableOpacity style={profileStyle.redemptionBox}
                                                              onPress={() => this.props.navigation.navigate('Shopping')}>
                                                <Image style={{width: 60}}
                                                       source={shoppingIcon}
                                                       resizeMode={'contain'}
                                                />
                                                <Text style={{fontSize: 18, bottom: 15}}>shopping</Text>
                                            </TouchableOpacity>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <TouchableOpacity style={profileStyle.redemptionBox}
                                                              onPress={() => this.props.navigation.navigate('Transport')}>
                                                <Image style={{width: 60}}
                                                       source={transportIcon}
                                                       resizeMode={'contain'}
                                                />
                                                <Text style={{fontSize: 18, bottom: 15}}>transportation</Text>
                                            </TouchableOpacity>
                                        </Row>
                                        <Row>
                                            <TouchableOpacity style={profileStyle.redemptionBox}
                                                              onPress={() => this.props.navigation.navigate('Others')}>
                                                <Image style={{width: 60}}
                                                       source={othersIcon}
                                                       resizeMode={'contain'}
                                                />
                                                <Text style={{fontSize: 18, bottom: 15}}>others</Text>
                                            </TouchableOpacity>
                                        </Row>
                                    </Col>
                                </Grid>
                            </Card>
                        </View>
                    </Row>
                </Grid>
            </ImageBackground>
        )
    }


}

const ProfileNavigator = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: () => ({
                header: null
            }),
            // params: {
            //     totalPoints: ,
            // }
        },
        Food: {
            screen: FoodRedemptionModal,
            navigationOptions: () => ({
                headerTitle: 'Food and Beverages',
            })
        },
        Transport: {
            screen: TransportationRedemptionModal,
            navigationOptions: () => ({
                headerTitle: 'Transportation'
            })
        },
        Shopping: {
            screen: ShoppingRedemptionModal,
            navigationOptions: () => ({
                headerTitle: 'Shopping'
            })
        },
        Others: {
            screen: OthersRedemptionModal,
            navigationOptions: () => ({
                headerTitle: 'Others'
            })
        }
    },
    {
        initialRouteName: 'Profile',
        defaultNavigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'rgba(0,168,43,0.75)'
            },
            gesturesEnabled: true,
        }
    }
);

const ProfileContainer = createAppContainer(ProfileNavigator);

export default ProfileContainer;