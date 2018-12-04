/**
 *https://www.jianshu.com/p/18b40c01d2c7
 *Created by dcl on
 *Function:
 *Desc
 */
'use strict';
import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, Image} from "react-native";
import {View} from "react-native";
import TitleBar from "./common/TitleBar";


/***
 * 只能由属性(prop)或者状态(state)控制界面显示内容的变化，其它的变量绝对不允许控制显示内容的变化。
 * prop 一般用于组件的对外接口，state 是组件的内部状态
 */
export default class MinePage extends Component {

    //render() 函数是用来渲染界面的
    render() {


        return (
            <View>
                <TitleBar title={"我的"} navigation={this.props} hideLeftArrow={true}/>

                <ScrollView style={styles.scrollview_view}>

                    <View style={styles.view_h}>


                        {/*<Image*/}
                            {/*style={{width: 50, height: 50}}*/}
                            {/*source={require('/img/msg_house.png')}/>*/}

                        <View style={styles.view_v}>
                            <Text style={styles.text_title}>房源信息</Text>


                            <Text style={styles.text_message}>您推荐的房源有新的消息</Text>
                        </View>
                        <Text style={styles.text_time}>下午3:25</Text>


                    </View>

                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page</Text>
                    <Text style={styles.welcome}> Mine Page1111</Text>

                </ScrollView>


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
    scrollview_view: {
        marginBottom: 75
    }

    ,
    view_h: {
        flexDirection: "row",

    }
    ,
    view_v: {
        flexDirection: "column",
        flex: 1,
        marginLeft: 20
    }
    ,
    text_time: {
        marginRight: 20,
        color: "#878E9B",
        fontSize: 12
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
});
