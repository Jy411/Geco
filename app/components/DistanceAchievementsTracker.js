import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

import ProgressBar from 'react-native-progress/Bar';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

import { cardStyles } from "../styles/style"; // styling for card

type Props = {
    totalDis:number;
};

class DistanceAchievementsTracker extends React.Component <Props>{
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            totalDistance: 50,
        };
    }

    progressUP() {
        this.setState(prevState => ({ progress: prevState.progress + 0.2 }));
    }

    render() {
        return (
            <Card
                containerStyle={cardStyles.cardStyle} // containerStyle is the container itself
                wrapperStyle={cardStyles.centerContainerItems} // wrapperStyle is for the contents of the container
            >
                <Grid>

                    <Row size={1}>
                        <View>
                            <ProgressBar width={wp(82)}
                                         height={hp(3)}
                                         progress={this.props.totalDis/100}
                                         borderWidth={0}
                                         // borderColor={'#b1b1b1'}
                                         borderRadius={20}
                                         color={'#2CC55E'}
                                         unfilledColor={'#D3D3D3'}
                                         animationType={'spring'}
                                         animated
                            />
                            {/*<Button title={'Press me'} onPress={() => this.progressUP()}/>*/}
                        </View>
                    </Row>

                    <Row size={1}>
                        <Col size={2}>
                            <View style={{alignItems: 'flex-start'}}>
                                <Text>
                                    <Text style={cardStyles.captionTextStyle}>Little Boi Steps</Text>
                                    <Text style={cardStyles.distanceTrackerCaptionStyle}> Progress</Text>
                                </Text>
                            </View>
                        </Col>

                        <Col size={1}>
                            <View style={{alignItems: 'flex-end'}}>
                                <Text>
                                    <Text style={{fontWeight: 'bold'}}>{this.props.totalDis}</Text>
                                    <Text>/100KM</Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                </Grid>

            </Card>
        );
    }
}


export default DistanceAchievementsTracker;

