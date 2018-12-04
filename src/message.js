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
import TitleBar from "./common/TitleBar";


/***
 * 只能由属性(prop)或者状态(state)控制界面显示内容的变化，其它的变量绝对不允许控制显示内容的变化。
 * prop 一般用于组件的对外接口，state 是组件的内部状态
 */
export default class MessagePage extends Component {

    //render() 函数是用来渲染界面的
    render() {


        return (
            <View>
                <TitleBar title={"消息"} navigation={this.props} hideLeftArrow={true}/>


                <View style={styles.view_h}>


                    <Image
                        style={styles.logo}
                        source={require('../img/msg_house.png')}/>

                    <View style={styles.view_v}>
                        <Text style={styles.text_title}>房源信息</Text>


                        <Text style={styles.text_message}>您推荐的房源有新的消息</Text>
                    </View>
                    <Text style={styles.text_time}>下午3:25</Text>


                    <View style={styles.line_gray}/>
                </View>
                <View style={styles.view_h}>


                    <Image
                        style={styles.logo}
                        source={require('../img/msg_sys.png')}/>

                    <View style={styles.view_v}>
                        <Text style={styles.text_title}>系统消息</Text>


                        <Text style={styles.text_message}>您提交的经纪人认证审核未通过</Text>
                    </View>
                    <Text style={styles.text_time}>下午5:25</Text>


                    <View style={styles.line_gray}/>
                </View>
                <View style={styles.view_h}>


                    <Image
                        style={styles.logo}
                        source={require('../img/icon_msg_order.png')}/>

                    <View style={styles.view_v}>
                        <Text style={styles.text_title}>订单消息</Text>


                        <Text style={styles.text_message}>订单进度反馈中…</Text>
                    </View>
                    <Text style={styles.text_time}>下午3:25</Text>


                    <View style={styles.line_gray}/>
                </View>

            </View>
        )
    }

}


//样式定义
const styles = StyleSheet.create({

    welcome: {
        fontSize: 30,
        color: 'red'
    }
    ,
    text_time: {
        marginRight: 20,
        color: "#878E9B",
        fontSize: 12,
    },

    text_title: {
        color: "#000000",
        fontSize: 16
    }
    ,
    text_message: {
        color: "#878E9B",
        fontSize: 13
    }
    ,
    view_h: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 10,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,//线条
        paddingBottom: 10
    }
    ,
    view_v: {
        flexDirection: "column",
        flex: 1,
        marginLeft: 20,
        justifyContent: 'center'//垂直居中
    }
    ,
    logo: {
        width: 45,
        height: 45,
        marginLeft: 10
    },
    line_gray: {
        borderBottomColor: "#eeeeee",
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});



