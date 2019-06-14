import React from "react";
import {View, ScrollView, Image} from "react-native";
import {Grid, Row} from "react-native-easy-grid";

import {cardStyles, homeStyle} from "../styles/style";
import RedemptionCard from "../components/RedemptionCard";

const listOfShops = [
    {
        shopLogo: <Image source={require('../images/recycle.jpg')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'The Re-use Initiative',
        redeemDesc: 'Redeem One (1) Wooden Container',
        points: '4000\nPoints'
    },
];

export default class OthersRedemptionModal extends React.Component {
    render() {
        return (
            <ScrollView style={homeStyle.scrollView}>
                <Grid>
                    {listOfShops.map((item) =>
                        <Row>
                            <View style={cardStyles.centerContainerItems}>
                                <RedemptionCard
                                    key={item.shopName}
                                    establishmentLogo={item.shopLogo}
                                    establishmentName={item.shopName}
                                    redemptionDescription={item.redeemDesc}
                                    redemptionPoints={item.points}/>
                            </View>
                        </Row>
                    )}
                </Grid>
            </ScrollView>
        )
    }

}

