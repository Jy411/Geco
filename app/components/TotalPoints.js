import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

class TotalPoints extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                containerStyle={styles.cardStyle} // the container itself
                // image={require('../images/earth.png')}
                wrapperStyle={styles.centerContainerItems} // contents of the container
            >
                <Grid>
                    <Col size={1}>
                        <View style={styles.center}>
                            <Icon size={36} name="trophy" color={"#008e66"}/>
                        </View>
                    </Col>

                    <Col size={1}>
                        <View style={styles.center}>
                            <Divider style={styles.dividerStyle}/>
                        </View>
                    </Col>

                    <Col size={3}>
                        <View style={styles.center}>
                            <Text style={styles.texthasstuff}>1,000,000</Text>
                            <Text style={{fontSize: 18}}>Points</Text>
                        </View>
                    </Col>
                </Grid>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        height: hp(10),
        width: wp(90),
        borderRadius: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dividerStyle: {
        width: wp(8),
        borderWidth: 1,
        transform: [{ rotate: '90deg'}]
    },
    texthasstuff: {
        fontSize: 24,
        color: 'black'
    },
    centerContainerItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default TotalPoints;

