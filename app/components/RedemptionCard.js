import React from "react";
import {View, Text} from "react-native";
import {Card, Button} from "react-native-elements";
import {Col, Grid, Row} from "react-native-easy-grid";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {cardStyles, redemptionCardStyle} from "../styles/style";

export default class RedemptionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key: '',
            establishmentLogo: '',
            establishmentName: '',
            redemptionDescription: '',
            redemptionPoints: 0,
        };
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
                                    buttonStyle={redemptionCardStyle.redemptionBtn}/>
                        </View>
                    </Col>

                </Grid>

            </Card>
        )
    }
}

