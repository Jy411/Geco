import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export default class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            // To determine whether to show the introduction sliders
            showRealApp: false,
        };
        changeNavigationBarColor("#689F38");
        StatusBar.setBackgroundColor("#689F38");
    }


    _onDone = () => {
        this.setState({showRealApp: true});
    };

    _onSkip = () => {
        this.setState({showRealApp: true});
    };

    render() {
        if (this.state.showRealApp) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 50,
                    }}>
                    <Text>
                        This will be your screen when you click Skip from any slide or Done
                        button at last
                    </Text>
                </View>
            );
        } else {
            return (
                <AppIntroSlider
                    slides={slides}
                    //coming from the JsonArray below
                    onDone={this._onDone}
                    //Handler for the done On last slide
                    showSkipButton={true}
                    onSkip={this._onSkip}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    image: {
        // width: 250,
        height: hp("70%"),
        bottom: hp("5%"),
        resizeMode: 'center',
    },
    sliderText: {
        color: '#FFFFFF',
        fontSize: 28,
        bottom: hp("5%"),
        textAlign: 'center',
        textAlignVertical: 'top',
        fontWeight: 'bold',
    },
});

const slides = [
    {
        key: 's1',
        text: 'Welcome to Geco',
        textStyle: styles.sliderText,
        image: require('./app/images/HDTree1.png'),
        imageStyle: styles.image,
        backgroundColor: '#AED581',
    },
    {
        key: 's2',
        text: 'Geco helps measure your impact on the environment',
        textStyle: styles.sliderText,
        image: require('./app/images/HDTree3.png'),
        imageStyle: styles.image,
        backgroundColor: '#AED581',
    },
    {
        key: 's3',
        text: 'Each small step brings us closer to our goal',
        textStyle: styles.sliderText,
        image: require('./app/images/HDTree5.png'),
        imageStyle: styles.image,
        backgroundColor: '#AED581',
    },
    {
        key: 's4',
        text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        textStyle: styles.sliderText,
        image: require('./app/images/earth.png'),
        imageStyle: styles.image,
        backgroundColor: '#AED581',
    },
];
