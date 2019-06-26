import React from "react";
import {View, ScrollView, Image} from "react-native";

import {Grid, Row} from "react-native-easy-grid";

import {cardStyles, homeStyle} from "../styles/style";
import RedemptionCard from "../components/RedemptionCard";

const listOfShops = [
    {
        shopLogo: <Image source={require('../images/TheHive.jpg')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'The Hive',
        redeemDesc: 'RM10 Off Voucher',
        points: '200\nPoints',
        value: 200,
    },
    {
        shopLogo: <Image source={require('../images/NUDE.png')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'NUDE',
        redeemDesc: 'RM10 Off Voucher',
        points: '200\nPoints',
        value: 200,
    },
    {
        shopLogo: <Image source={require('../images/BLISS.png')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'BLISS',
        redeemDesc: '20% Storewide Discount',
        points: '350\nPoints',
        value: 350,
    },
];

export default class ShoppingRedemptionModal extends React.Component {
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

