import React, {Component} from "react";
import { View, Text } from "react-native";
import { BarChart, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';


import {Card, Divider} from 'react-native-elements';
import { Col, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { cardStyles } from "../styles/style";


export default class CaloriesCounter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            calBurnt: 0,
        };
    }


    render() {
        const data = [ 14, 80, 100, 55, 90, 33, 81 ];

        return (
            <Card
                containerStyle={cardStyles.cardStyle} // containerStyle is the container itself
                wrapperStyle={cardStyles.centerContainerItems} // wrapperStyle is for the contents of the container
            >
                <Grid>

                    {/*First Column*/}
                    <Col size={1}>
                        <View style={cardStyles.centerContainerItems}>
                            <Icon size={48} name="dumbbell" color={"#2CC55E"} style={{textAlign: 'center'}}/>
                            <Text style={{textAlign: 'center'}}>Calories Burnt</Text>
                        </View>
                    </Col>

                    {/*Divider*/}
                    <Col size={1}>
                        <View style={cardStyles.centerContainerItems}><Divider style={cardStyles.dividerStyle}/></View>
                    </Col>

                    {/*Points Column*/}
                    <Col size={4}>
                        <View style={{justifyContent: 'center', flex: 1}}>

                                <BarChart
                                    style={{ flex: 1 }}
                                    data={data}
                                    spacingInner={0.20}
                                    gridMin={0}
                                    svg={{ fill: '#2CC55E' }}
                                />
                                <XAxis
                                    style={{ marginTop: 7 }}
                                    data={ data }
                                    scale={scale.scaleBand}
                                    spacingInner={0.20}
                                    formatLabel={ (value, index) =>
                                        index+1
                                    }
                                    labelStyle={ { color: 'black' } }
                                />


                            {/*<Text style={{fontSize: 18}}>Calories Burnt</Text>*/}
                        </View>
                    </Col>


                </Grid>
            </Card>
        );
    }
}


