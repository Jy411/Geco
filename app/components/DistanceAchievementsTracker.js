import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

import ProgressBar from 'react-native-progress/Bar';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

class DistanceAchievementsTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            totalDistance: 0,
        };

    }

    progressUP() {
        this.setState(prevState => ({ progress: prevState.progress + 0.2 }));
    }

    render() {
        return (
            <Card
                containerStyle={distanceAchievementStyle.cardStyle} // containerStyle is the container itself
                wrapperStyle={distanceAchievementStyle.centerContainerItems} // wrapperStyle is for the contents of the container
            >
                <Grid>

                    <Row size={2}>
                        <View>
                            <ProgressBar width={wp(82)}
                                         height={hp(3)}
                                         progress={this.state.progress}
                                         borderWidth={0}
                                         borderRadius={4}
                                         color={'#66CDAA'}
                                         unfilledColor={'#D3D3D3'}
                                         animationType={'spring'}
                                         animated
                            />
                            {/*<Button title={'Press me'} onPress={() => this.progressUP()}/>*/}
                        </View>
                    </Row>

                    <Row size={1}>
                        <Col size={2}>
                            <View>
                                <Text>
                                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Little Boi Steps</Text>
                                    <Text style={{fontSize: 12}}> Progress</Text>
                                </Text>
                            </View>
                        </Col>

                        <Col size={1}>
                            <View style={{alignItems: 'flex-end'}}>
                                <Text>
                                    <Text style={{fontWeight: 'bold'}}>48/</Text>
                                    <Text>100KM</Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                </Grid>

            </Card>
        );
    }
}

const distanceAchievementStyle = StyleSheet.create({
    cardStyle: {
        height: hp(13),
        width: wp(90),
        borderRadius: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dividerStyle: {
        width: wp(8),
        borderWidth: 1,
        transform: [{ rotate: '90deg'}]
    },
    pointsTextStyle: {
        fontSize: 24,
        color: 'black'
    },
    centerContainerItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DistanceAchievementsTracker;

