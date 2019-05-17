import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Home from './app/containers/Home';
import { slides } from './app/styles/style';

/* Initial screen, this is the first page which loads. On first run, it will display an intro slider.
*  The actual screen have a BottomNavBar for users to navigate around the different screens.
*  */

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

    _onDone = () => {
        this.setState({showRealApp: true});
    };

    _onSkip = () => {
        this.setState({showRealApp: true});
    };

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

/* ========== Moved these stylesheets to style.js ========== */

// const styles = StyleSheet.create({
//     image: {
//         // width: 250,
//         height: hp("70%"),
//         bottom: hp("5%"),
//         resizeMode: 'center',
//     },
//     sliderText: {
//         color: '#FFFFFF',
//         fontSize: 28,
//         bottom: hp("5%"),
//         textAlign: 'center',
//         textAlignVertical: 'top',
//         fontWeight: 'bold',
//     },
// });

// const slides = [
//     {
//         key: 's1',
//         text: 'Welcome to Geco',
//         textStyle: styles.sliderText,
//         image: require('./app/images/HDTree1.png'),
//         imageStyle: styles.image,
//         backgroundColor: '#a4df92',
//     },
//     {
//         key: 's2',
//         text: 'Geco helps measure your impact on the environment',
//         textStyle: styles.sliderText,
//         image: require('./app/images/HDTree3.png'),
//         imageStyle: styles.image,
//         backgroundColor: '#a4df92',
//     },
//     {
//         key: 's3',
//         text: 'Each small step brings us closer to our goal',
//         textStyle: styles.sliderText,
//         image: require('./app/images/HDTree5.png'),
//         imageStyle: styles.image,
//         backgroundColor: '#a4df92',
//     },
//     {
//         key: 's4',
//         text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
//         textStyle: styles.sliderText,
//         image: require('./app/images/earth.png'),
//         imageStyle: styles.image,
//         backgroundColor: '#a4df92',
//     },
// ];

/* ========== Moved these stylesheets to style.js ========== */
