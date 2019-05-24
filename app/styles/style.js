import {StyleSheet} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

// Stylesheet to be used for the Intro Slides
const introSliderStyles = StyleSheet.create({
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
const slides = [
    {
        key: 's1',
        text: 'Welcome to Geco',
        textStyle: introSliderStyles.sliderText,
        image: require('../images/HDTree1.png'),
        imageStyle: introSliderStyles.image,
        backgroundColor: '#a4df92',
    },
    {
        key: 's2',
        text: 'Geco helps measure your impact on the environment',
        textStyle: introSliderStyles.sliderText,
        image: require('../images/HDTree3.png'),
        imageStyle: introSliderStyles.image,
        backgroundColor: '#a4df92',
    },
    {
        key: 's3',
        text: 'Each small step brings us closer to our goal',
        textStyle: introSliderStyles.sliderText,
        image: require('../images/HDTree5.png'),
        imageStyle: introSliderStyles.image,
        backgroundColor: '#a4df92',
    },
    {
        key: 's4',
        text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        textStyle: introSliderStyles.sliderText,
        image: require('../images/earth.png'),
        imageStyle: introSliderStyles.image,
        backgroundColor: '#a4df92',
    },
];

// Used in TotalPoints.js for styling the card components
const totalPointsStyle = StyleSheet.create({
    cardStyle: {
        height: hp(13),
        width: wp(90),
        borderRadius: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dividerStyle: {
        width: wp(8),
        borderWidth: 1,
        transform: [{ rotate: '90deg'}]
    },
    pointsTextStyle: {
        fontSize: 24,
        color: 'black'
    },
    centerContainerItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// Used in Home.js to style the Avatar component
const homeStyle = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    centerChildren: {
        alignItems: 'center', // center the children inside the view
        paddingTop: hp(5),
    },
    setViewWidth: {
        width: wp(100),
    },
    colorView: {
        backgroundColor: 'brown', // set the background color of the view
    },
    avatarText: {
        fontSize: 24,
        color: 'white',
    },


});

export  {
    slides,
    totalPointsStyle,
    homeStyle
}
