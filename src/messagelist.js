/**
 *
 *Created by dcl on
 *Function:
 *Desc
 */

import React, {Component} from 'react';
import {} from 'react-native';
import TitleBar from "./common/TitleBar";

export default class  extends Component {

    render() {
        return (
            <View>
                <TitleBar title={"消息详情"} navigation={this.props} hideLeftArrow={true}/>


            </View>
        )
    }

}
