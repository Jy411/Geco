import {StyleSheet} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

// Stylesheet to be used for the Intro Slides
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

// Used in App.js to render the Intro Slides
export const slides = [
    {
        key: 's1',
        text: 'Welcome to Geco',
        textStyle: styles.sliderText,
        image: require('../images/HDTree1.png'),
        imageStyle: styles.image,
        backgroundColor: '#a4df92',
    },
    {
        key: 's2',
        text: 'Geco helps measure your impact on the environment',
        textStyle: styles.sliderText,
        image: require('../images/HDTree3.png'),
        imageStyle: styles.image,
        backgroundColor: '#a4df92',
    },
    {
        key: 's3',
        text: 'Each small step brings us closer to our goal',
        textStyle: styles.sliderText,
        image: require('../images/HDTree5.png'),
        imageStyle: styles.image,
        backgroundColor: '#a4df92',
    },
    {
        key: 's4',
        text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        textStyle: styles.sliderText,
        image: require('../images/earth.png'),
        imageStyle: styles.image,
        backgroundColor: '#a4df92',
    },
];


