/**
 *https://www.jianshu.com/p/18b40c01d2c7
 *Created by dcl on
 *Function:
 *Desc
 */


'use strict';
import React, {Component} from 'react';
import {Text, StyleSheet, Image} from "react-native";
import {View} from "react-native";
import {Dimensions} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


//引入自己的js文件，一定要加"./"
import HomePage from './home';
import MinePage from './mine';
import MessagePage from "./message";


const HOME_TAG = "selected";
const HOME_TITLE = "首页";
const HOME_NORMAL = require('../img/home.png');
const HOME_SELECT = require('../img/home_press.png');

const MESSAGE_TAG = "message";
const MESSAGE_TITLE = "消息";
const MESSAGE_NORMAL = require('../img/message.png');
const MESSAGE_SELECT = require('../img/message_press.png');

const MINE_TAG = "mine";
const MINE_TITLE = "我的";
const MINE_NORMAL = require('../img/mine.png');
const MINE_SELECT = require('../img/mine_press.png');

/***
 * 只能由属性(prop)或者状态(state)控制界面显示内容的变化，其它的变量绝对不允许控制显示内容的变化。
 * prop 一般用于组件的对外接口，state 是组件的内部状态
 * 底部切换 参考https://github.com/MarnoDev/HelloRN/blob/master/app/eyepetizer_demo/MainPage.js
 */
export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: HOME_TAG
        }
    }

    //render() 函数是用来渲染界面的
    render() {


        return (

            <View style={styles.parent_view}>


                <TabNavigator
                    tabBarStyle={styles.tab_container}
                    tabBarShadowStyle={{height: 0}}>
                    {this._renderTabItem(HOME_TAG, HOME_TITLE, HOME_NORMAL, HOME_SELECT)}
                    {this._renderTabItem(MESSAGE_TAG, MESSAGE_TITLE, MESSAGE_NORMAL, MESSAGE_SELECT)}
                    {this._renderTabItem(MINE_TAG, MINE_TITLE, MINE_NORMAL, MINE_SELECT)}
                </TabNavigator>

            </View>
        )
    }


    _renderTabItem(tag, title, iconNormal, iconFocus) {

        return (
            //只有一个参数：a => a++; // 相当于 function(a) { return a++; }
            //不带参数：() => { 表达式语句... }
            //两个及以上参数：(a, b) => { 表达式语句; }
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                badgeText={tag === MESSAGE_TAG ? "1" : "0"}
                title={title}
                titleStyle={styles.tab_title}
                selectedTitleStyle={styles.tab_title_selected}
                renderIcon={() => <Image source={iconNormal} style={styles.tab_icon}/>}
                renderSelectedIcon={() => <Image source={iconFocus} style={styles.tab_icon}/>}
                onPress={() => this.setState({selectedTab: tag})}>
                {this._createContentPage(tag)}
            </TabNavigator.Item>
        )

    }

    /**
     * 渲染tab对应的内容页面
     * @param tag
     * @returns {XML}
     * @private
     */
    _createContentPage(tag) {

        switch (tag) {

            //'...' 对象解析构，将所有props再值给tag组件

            case HOME_TAG:

                return (<HomePage {...this.props}/>);

            case MESSAGE_TAG:

                return (<MessagePage {...this.props}/>);

            case MINE_TAG:

                return (<MinePage {...this.props}/>);
        }
    }
}


//样式定义
const styles = StyleSheet.create({


    parent_view: {

        flex: 1//全屏展示
    }

    ,
    welcome: {
        fontSize: 30,
        color: 'red'
    },

    tab_container: {
        height: 42,
        position: 'absolute',
        bottom: 0
    },
    tab_title: {
        color: "#929292",
        fontSize: 12
    },
    tab_title_selected: {
        color: "#333333",
        fontSize: 12
    },
    tab_icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
