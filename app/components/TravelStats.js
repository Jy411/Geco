import React from "react";
import { View, Text} from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { cardStyles } from "../styles/style";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";


type Props ={
    walkD:number;
};

type State ={

};


class TravelStats extends React.Component <Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            walkDist: 15,
            driveDist: 22,
            publicTransportDist: 13
        };

    }

    render() {
        return (
            <Card
                containerStyle={cardStyles.cardStyle} // containerStyle is the container itself
                wrapperStyle={cardStyles.centerContainerItems} // wrapperStyle is for the contents of the container
            >

                <Grid marginBottom={hp(3)}>
                    <Col size={1}>
                        <View style={{paddingLeft: wp(3)}}>
                            <Icon name='walking'
                                  color='green'
                                  size={24}
                            />
                        </View>
                    </Col>

                    <Col size={3}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: '400'}}>Walking</Text>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View>
                            <Text>
                                <Text style={{fontSize: 20, fontWeight: '200'}}>{this.props.walkD}</Text>
                                <Text style={{fontSize: 15, fontWeight: '200'}}> KM</Text>
                            </Text>
                        </View>
                    </Col>
                </Grid>

                {/*<View style={{backgroundColor: 'black', width: wp(80), height: 1}}/>*/}

                <Grid marginBottom={hp(3)}>
                    <Col size={1}>
                        <View style={{paddingLeft: wp(2)}}>
                            <Icon name='car-side'
                                  color='green'
                                  size={24}
                            />
                        </View>
                    </Col>

                    <Col size={3}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: '400'}}>Driving</Text>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View>
                            <Text>
                                <Text style={{fontSize: 20, fontWeight: '200'}}>{this.state.driveDist}</Text>
                                <Text style={{fontSize: 15, fontWeight: '200'}}> KM</Text>
                            </Text>
                        </View>
                    </Col>
                </Grid>

                {/*<View style={{backgroundColor: 'black', width: wp(80), height: 1}}/>*/}

                <Grid marginBottom={hp(3)}>
                    <Col size={1}>
                        <View style={{paddingLeft: wp(3)}}>
                            <Icon name='train'
                                  color='green'
                                  size={24}
                            />
                        </View>
                    </Col>

                    <Col size={3}>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: '400'}}>Public Transit</Text>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View>
                            <Text>
                                <Text style={{fontSize: 20, fontWeight: '200'}}>{this.state.publicTransportDist}</Text>
                                <Text style={{fontSize: 15, fontWeight: '200'}}> KM</Text>
                            </Text>
                        </View>
                    </Col>
                </Grid>

            </Card>
        );
    }
}


// Moved to style.js
// const totalPointsStyle = StyleSheet.create({
//     cardStyle: {
//         height: hp(10),
//         width: wp(90),
//         borderRadius: 10,
//     },
//     center: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     dividerStyle: {
//         width: wp(8),
//         borderWidth: 1,
//         transform: [{ rotate: '90deg'}]
//     },
//     pointsTextStyle: {
//         fontSize: 24,
//         color: 'black'
//     },
//     centerContainerItems: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });
// Moved to style.js

export default TravelStats;

