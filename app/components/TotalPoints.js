import React, { Component }from "react";
import { View, Text} from "react-native";
import { Card, Divider } from 'react-native-elements';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

import { cardStyles } from "../styles/style"; // styling for card

export default class TotalPoints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPoints: props.totalPoints,
        };

    }
    componentWillMount() {
        console.log('Before Mount: ' + this.state.totalPoints)
    };

    componentWillReceiveProps(nextProps){
        console.log('Received Props.');
        this.setState({
            totalPoints: nextProps.totalPoints,
        });
    };

    componentDidMount(){
        console.log('After Mount' + (this.state.totalPoints+400))
    };

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
                            <Icon size={50} name="trophy" color={"#2CC55E"}/>
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
                                {this.state.totalPoints}
                                {/*Change the state.totalPoints to change the total points of the card*/}
                            </Text>
                            <Text style={{fontSize: 20}}>Total Points</Text>
                        </View>
                    </Col>

                </Grid>
            </Card>
        );
    }


}


