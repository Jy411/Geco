import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Home from './app/containers/Home';

// Slides for intro slider
import { slides } from './app/styles/style';
import Login from "./app/containers/Login";

/* Initial screen, this is the first page which loads. On first run, it will display an intro slider.
*  The actual screen have a BottomNavBar for users to navigate around the different screens.
*  */
type State = {
    showRealApp:boolean;
};



export default class App extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            // To determine whether to show the introduction sliders
            showRealApp: true,
        };
        changeNavigationBarColor("#388E3C");
        StatusBar.setBackgroundColor("#388E3C");
    }

    _onDone = () => {this.setState({showRealApp: true});};

    _onSkip = () => {this.setState({showRealApp: true});};


    render() {
        if (this.state.showRealApp) {
            return (
                // This home component is the main screen
                // Found in /app/containers folder

                <Home/>
            );
        } else {
            return (
                <AppIntroSlider
                    slides={slides}
                    onDone={this._onDone}
                    onSkip={this._onSkip}
                    showSkipButton={true}
                />
            );
        }
    }
}
