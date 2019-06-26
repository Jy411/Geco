import React from "react";
import {View, ScrollView, Image} from "react-native";

import {Grid, Row} from "react-native-easy-grid";

import {cardStyles, homeStyle} from "../styles/style";
import RedemptionCard from "../components/RedemptionCard";

const listOfShops = [
    {
        shopLogo: <Image source={require('../images/tng.jpg')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'Touch and Go',
        redeemDesc: 'One (1) Month RapidKL Pass',
        points: '4000\nPoints',
        value: 4000,
    },
    {
        shopLogo: <Image source={require('../images/grab.png')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'Grab',
        redeemDesc: 'RM10 Off Next Ride',
        points: '1000\nPoints',
        value: 1000,
    },
    {
        shopLogo: <Image source={require('../images/socar.png')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'SOCAR',
        redeemDesc: 'RM8 Off Voucher',
        points: '500\nPoints',
        value: 5000,
    },
];

export default class TransportationRedemptionModal extends React.Component {
    render() {
        return (
            <ScrollView style={homeStyle.scrollView}>
                <Grid>
                    {listOfShops.map((item, key) =>
                        <Row>
                            <View style={cardStyles.centerContainerItems}>
                                <RedemptionCard
                                    key={key}
                                    establishmentLogo={item.shopLogo}
                                    establishmentName={item.shopName}
                                    redemptionDescription={item.redeemDesc}
                                    redemptionPoints={item.points}
                                    pointValue={item.value}
                                />
                            </View>
                        </Row>
                    )}
                </Grid>
            </ScrollView>
        )
    }

}

