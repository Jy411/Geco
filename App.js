import React, {Component} from 'react';
<<<<<<< HEAD
<<<<<<< master
<<<<<<< master
<<<<<<< master
=======
>>>>>>> Merge branch 'master' of https://github.com/Jy411/Geco into jy-geco
import { StyleSheet, View, Text, StatusBar } from 'react-native';
=======
import { StatusBar } from 'react-native';
>>>>>>> - Created 2 new components: DisplayProfile.js (Avatar), TotalPoints.js (Card) - Styling is messy, currently in the TotalPoints.js and Home.js, TODO move to style.js OR keep each styling to each component file - Implemented ScrollView in Home.js - Cleaned up some code (but more needs to be done)
=======
import { StatusBar } from 'react-native';
>>>>>>> jy-geco
import AppIntroSlider from 'react-native-app-intro-slider';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Home from './app/containers/Home';

// Slides for intro slider
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
<<<<<<< HEAD

<<<<<<< master
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
<<<<<<< master
        backgroundColor: '#AED581',
<<<<<<< master
    },
    {
        key: 's2',
        text: 'Geco helps measure your impact on the environment',
        textStyle: styles.sliderText,
        image: require('./app/images/HDTree3.png'),
=======
=======
        backgroundColor: '#a4df92',
>>>>>>> - Added bottom tab navigation - TODO add icons, readability, navigating to pages
    },
    {
        key: 's2',
        text: 'Geco helps measure your impact on the environment',
        textStyle: styles.sliderText,
        image: require('./app/images/HDTree3.png'),
        imageStyle: styles.image,
        backgroundColor: '#a4df92',
    },
    {
        key: 's3',
        text: 'Each small step brings us closer to our goal',
        textStyle: styles.sliderText,
        image: require('./app/images/HDTree5.png'),
>>>>>>> Merge branch 'master' of https://github.com/Jy411/Geco into jy-geco
        imageStyle: styles.image,
        backgroundColor: '#AED581',
    },
    {
<<<<<<< master
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
        backgroundColor: '#a4df92',
    },
];
=======
import Ionicons from 'react-native-vector-icons/Ionicons';
import Playground from './app/containers/Playground';
import Home from './app/containers/Home';
import IntroSlider from './app/containers/IntroSlider';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
    {
        Home: Home,
        Playground: IntroSlider,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'Playground') {
                    iconName = `ios-options`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);
>>>>>>> added IntroSlider, TODO implement it to app.js
=======
        key: 's4',
        text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        textStyle: styles.sliderText,
        image: require('./app/images/earth.png'),
        imageStyle: styles.image,
        backgroundColor: '#a4df92',
    },
];
<<<<<<< master
>>>>>>> Merge branch 'master' of https://github.com/Jy411/Geco into jy-geco
=======

>>>>>>> - Added bottom tab navigation - TODO add icons, readability, navigating to pages
=======
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
>>>>>>> - Created 2 new components: DisplayProfile.js (Avatar), TotalPoints.js (Card) - Styling is messy, currently in the TotalPoints.js and Home.js, TODO move to style.js OR keep each styling to each component file - Implemented ScrollView in Home.js - Cleaned up some code (but more needs to be done)
=======

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
>>>>>>> jy-geco
