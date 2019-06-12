import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

import { cardStyles } from "../styles/style"; // styling for card



class PointsHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointsFromPreviousTrip: 100,
        };
    }

    render() {
        return (
            <Card
                containerStyle={cardStyles.cardStyle} // containerStyle is the container itself
                wrapperStyle={cardStyles.centerContainerItems} // wrapperStyle is for the contents of the container
            >
                <Grid>

                    <Col size={1}>
                        <View style={cardStyles.centerContainerItems}>
                            <Icon name='history'
                                  color='#2CC55E'
                                  size={48}
                            />
                        </View>
                    </Col>

                    <Col size={3}>
                        <View style={cardStyles.centerContainerItems}>
                            <Text>
                                <Text style={cardStyles.prevPointsEarned}>+{this.state.pointsFromPreviousTrip}</Text>
                                <Text> Points Last Trip</Text>
                            </Text>
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Points History</Text>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View style={cardStyles.centerContainerItems}>
                            <Icon name='info-circle'
                                  color='#2CC55E'
                                  size={40}
                                  />
                        </View>
                    </Col>

                </Grid>

            </Card>
        );
    }
}


export default PointsHistory;

