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
const cardStyles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        height: hp(18),
        width: wp(90),
        borderRadius: 20,
    },
    centerContainerItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    totalPointsHistoryNumberAlignment: {
        // width: wp(80),
        // alignContent: 'center', // alignContent overrides parent and applies to all the children
        // alignSelf: 'center', // alignSelf controls itself
        alignItems: 'center', // alignItems controls the children
        justifyContent: 'center',
        // backgroundColor: 'orange'
    },
    prevPointsEarned: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
    },
    dividerStyle: {
        width: wp(15),
        borderWidth: 1,
        transform: [{ rotate: '90deg'}]
    },
    pointsTextStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    captionTextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    distanceTrackerCaptionStyle: {
        fontSize: 12
    }
});

// Used in Home.js to style the Avatar component
const homeStyle = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    centerChildren: {
        alignItems: 'center', // center the children inside the view
        paddingTop: hp(3),
    },
    setViewWidth: {
        width: wp(100),
    },
    colorView: {
        backgroundColor: 'brown', // set the background color of the view
    },
    avatarText: {
        fontSize: 24,
        color: 'black',
    },


});

export  {
    slides,
    cardStyles,
    homeStyle
}
