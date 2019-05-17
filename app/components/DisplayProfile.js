import React from "react";
import { Avatar } from 'react-native-elements';


class DisplayProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Avatar
                rounded
                size="xlarge"
                overlayContainerStyle={{backgroundColor: '#81A171'}} // background color of avatar
                icon = {{ name:'tree', type:'font-awesome', color:'#41523c' }}
            />
        )
    }


}

export default DisplayProfile;
