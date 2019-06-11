import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'


class TravelHistory extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            // To determine whether to show the introduction sliders
            totalP:0,
            oLat: '',
            oLong: '',
            dLat: '',
            dLong: '',
        };


    }
    render() {

        return (
            <View>
                <Card


                >

                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>
                <Card


                >

                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>
                <Card


            >

                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>

            </View>


        )
    }
}

export default TravelHistory;
