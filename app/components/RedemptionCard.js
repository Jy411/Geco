import React from "react";
import {View, Text, Alert} from "react-native";
import {Card, Button} from "react-native-elements";
import {Col, Grid, Row} from "react-native-easy-grid";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {cardStyles, redemptionCardStyle} from "../styles/style";
import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase({name:'geco.db', createFromLocation: '~/geco.db', location: 'Library' });

export default class RedemptionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            totalPoints: 0,
            establishmentLogo: '',
            establishmentName: '',
            redemptionDescription: '',
            redemptionPoints: 0,
            pointValue: 0,
        };
    }

    componentWillMount() {
        // Runs SQL Query to get totalPoints for user
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE uid=?', [2],(tx, results) => {
                var len = results.rows.length;
                if (len > 0) {
                    var row = results.rows.item(0);
                    this.setState({totalPoints:row.points});
                    console.log(`Total points: ${this.state.totalPoints}`)
                }
            })
        })
    }

    checkPoints(cost, currentPoints) {
        // If not enough points
        if (currentPoints < cost){
            Alert.alert('Sorry!', `You only have ${currentPoints} points. You need ${cost-currentPoints} more points!`);
        }
        // If enough points update record in local database
        else {
            let codeStr = Math.random().toString(36).substr(2, 16);
            db.transaction((tx) => {
                tx.executeSql('UPDATE user SET points=? WHERE uid=?', [currentPoints-cost, 2]);
                Alert.alert('Successfully Redeemed!', `Show this code to the cashier:\n${codeStr}`);
                console.log('Successfully updated points');
            })
        }
    }

    render() {
        return (
            <Card
                containerStyle={redemptionCardStyle.cardContainer}
                wrapperStyle={cardStyles.centerContainerItems}>

                <Grid >
                    <Col size={2}>
                        <View style={[cardStyles.centerContainerItems]}>
                            {this.props.establishmentLogo}
                        </View>
                    </Col>

                    <Col size={3}>
                        <Row>
                            <View style={{alignItems: 'flex-start', justifyContent: 'center', paddingLeft: wp(2)}}>
                                <Text style={redemptionCardStyle.establishmentTitle}>
                                    {this.props.establishmentName}
                                </Text>
                                <Text style={redemptionCardStyle.redemptionDescText}>
                                    {this.props.redemptionDescription}
                                </Text>
                            </View>
                        </Row>
                    </Col>

                    <Col size={2}>
                        <View style={redemptionCardStyle.lastColOfCard}>
                            <Button title={this.props.redemptionPoints}
                                    containerStyle={{flex: 1}}
                                    buttonStyle={redemptionCardStyle.redemptionBtn}
                                    onPress={() => this.checkPoints(this.props.pointValue, this.state.totalPoints)}
                            />
                        </View>
                    </Col>

                </Grid>

            </Card>
        )
    }
}

