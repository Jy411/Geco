import React, {Component} from "react";
import { View, Text} from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

import { cardStyles } from "../styles/style"; // styling for card

// type Props = {
//     totalP:number;
// }
//
// type State = {
//     totalPoints:number;
// }

export default class TotalPoints extends Component{
    constructor(props) {
        super(props);
        this.state = {
            totalPoints: 0,
        };
    }

    componentWillMount() {
        this.setState({totalPoints: this.props.totalP});
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
                            <Icon size={48} name="trophy" color={"#2CC55E"}/>
                        </View>
                    </Col>

                    {/*Divider*/}
                    <Col size={1}>
                        <View style={cardStyles.centerContainerItems}><Divider style={cardStyles.dividerStyle}/></View>
                    </Col>

                    {/*Points Column*/}
                    <Col size={4}>
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


