import React from "react";
import { View, Text, Image} from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { cardStyles } from "../styles/style";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";


class TravelStats extends React.Component {
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
                        <View style={cardStyles.travelStatsCard}>
                            <Icon name='walking'
                                  color='#2CC55E'
                                  size={24}
                            />
                        </View>
                    </Col>

                    <Col size={3}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: '400'}}>Walking</Text>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View style={cardStyles.travelStatsCard}>
                            <Text>
                                <Text style={{fontSize: 20, fontWeight: '200'}}>{this.state.walkDist}</Text>
                                <Text style={{fontSize: 15, fontWeight: '200'}}> KM</Text>
                            </Text>
                        </View>
                    </Col>
                </Grid>

                <Grid marginBottom={hp(3)}>
                    <Col size={1}>
                        <View style={cardStyles.travelStatsCard}>
                            <Icon name='car'
                                  color='#2CC55E'
                                  size={24}
                            />
                        </View>
                    </Col>

                    <Col size={3}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: '400'}}>Driving</Text>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View style={cardStyles.travelStatsCard}>
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
                        <View style={cardStyles.travelStatsCard}>
                            <Icon name='train'
                                  color='#2CC55E'
                                  size={24}
                            />
                        </View>
                    </Col>

                    <Col size={3}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: '400'}}>Public Transit</Text>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View style={cardStyles.travelStatsCard}>
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



export default TravelStats;

