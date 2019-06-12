import React from "react";
import { View, Text} from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

import { cardStyles } from "../styles/style"; // styling for card

type Props = {
    totalP:number;
}

type State = {
    totalPoints:number;
}


class TotalPoints extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            totalPoints: 0,
        };
    }
    componentDidMount(): void {
        this.state = {
            totalPoints: this.props.totalP,
        };
    }



    render() {
        return (
            <Card
                containerStyle={cardStyles.cardStyle} // containerStyle is the container itself
                wrapperStyle={cardStyles.centerContainerItems} // wrapperStyle is for the contents of the container
            >
                <Grid>
                    {/*First Column*/}
                    <Col size={1}>
                        <View style={cardStyles.centerContainerItems}>
                            <Icon size={36} name="trophy" color={"#008e66"}/>
                        </View>
                    </Col>

                    {/*Divider*/}
                    <Col size={1}>
                        <View style={cardStyles.centerContainerItems}><Divider style={cardStyles.dividerStyle}/></View>
                    </Col>

                    {/*Points Column*/}
                    <Col size={3}>
                        <View style={cardStyles.centerContainerItems}>
                            <Text style={cardStyles.pointsTextStyle}>
                                {/*Change the state.totalPoints to change the total points of the card*/}
                                {this.props.totalP}
                                {/*Change the state.totalPoints to change the total points of the card*/}
                            </Text>
                            <Text style={{fontSize: 18}}>Total Points</Text>
                        </View>
                    </Col>

                </Grid>
            </Card>
        );
    }
}


// Moved to style.js
// const totalPointsStyle = StyleSheet.create({
//     cardStyle: {
//         height: hp(10),
//         width: wp(90),
//         borderRadius: 10,
//     },
//     center: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     dividerStyle: {
//         width: wp(8),
//         borderWidth: 1,
//         transform: [{ rotate: '90deg'}]
//     },
//     pointsTextStyle: {
//         fontSize: 24,
//         color: 'black'
//     },
//     centerContainerItems: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });
// Moved to style.js

export default TotalPoints;

