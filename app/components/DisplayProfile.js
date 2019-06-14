import React from "react";
import { Avatar } from 'react-native-elements';

class DisplayProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarImage: {name:'tree', type:'font-awesome', color:'#41523c'}
        }
    }


    changeAvatar() {
        this.setState({
            avatarImage: {name:'random', type:'font-awesome', color:'#41523c'}
        })
    }

    render() {
        return (
            <Avatar
                source={require('../images/ProfileStock.jpg')}
                imageProps={{
                    resizeMode: 'cover'
                }}
                // onPress={() => this.changeAvatar()}
                rounded
                size={'xlarge'}
                // overlayContainerStyle={{backgroundColor: 'rgb(109,195,129)'}} // background color of avatar
                // icon = {this.state.avatarImage}
            />
        )
    }

}

export default DisplayProfile;
