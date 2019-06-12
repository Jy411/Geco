import React from "react";
import {View, ScrollView, Image} from "react-native";

import {Grid, Row} from "react-native-easy-grid";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

import {cardStyles, homeStyle} from "../styles/style";
import RedemptionCard from "../components/RedemptionCard";

const listOfShops = [
    {
        shopLogo: <Image source={require('../images/SimpleLife.jpg')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'Simple Life',
        redeemDesc: 'One (1) Bamboo Cup',
        points: '5000\nPoints'
    },
    {
        shopLogo: <Image source={require('../images/BMS.jpg')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'BMS Organics',
        redeemDesc: 'One (1) Green Meal',
        points: '1000\nPoints'
    },
    {
        shopLogo: <Image source={require('../images/LNFortunate.png')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'LN Fortunate Coffee',
        redeemDesc: 'One (1) Breakfast Meal',
        points: '100\nPoints'
    },
    {
        shopLogo: <Image source={require('../images/DahMakan.png')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'dahmakan',
        redeemDesc: 'One (1) Free Delivery',
        points: '250\nPoints'
    },
    {
        shopLogo: <Image source={require('../images/WTF.jpg')} style={{width: '100%', height: undefined, aspectRatio: 1}} resizeMode={'center'}/>,
        shopName: 'WTF',
        redeemDesc: '20% Discount Voucher',
        points: '1500\nPoints'
    }
];

export default class FoodRedemptionModal extends React.Component {
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
                                    redemptionPoints={item.points}/>
                            </View>
                        </Row>


                    )}
                </Grid>
            </ScrollView>
        )
    }

}
