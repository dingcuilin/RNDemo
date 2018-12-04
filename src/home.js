/**
 *https://www.jianshu.com/p/18b40c01d2c7
 *Created by dcl on
 *Function:
 *Desc
 */
'use strict';
import React, {Component} from 'react';
import {Text, StyleSheet} from "react-native";
import {View} from "react-native";
import TitleBar from "./common/TitleBar";
import Swiper from 'react-native-swiper';


/***
 * 只能由属性(prop)或者状态(state)控制界面显示内容的变化，其它的变量绝对不允许控制显示内容的变化。
 * prop 一般用于组件的对外接口，state 是组件的内部状态
 */
export default class homePage extends Component {

    //render() 函数是用来渲染界面的
    render() {

        // const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <TitleBar title={"首页"} navigation={this.props} hideLeftArrow={true}/>


                <View style={styles1.swiper_view}>

                    <Swiper style={styles1.wrapper} showsButtons={false}>
                        <View style={styles1.slide1}>
                            <Text style={styles1.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles1.slide2}>
                            <Text style={styles1.text}>Beautiful</Text>
                        </View>
                        <View style={styles1.slide3}>
                            <Text style={styles1.text}>And simple</Text>
                        </View>
                    </Swiper>

                </View>

                <Text style={styles.welcome}> Home Page</Text>

            </View>
        )
    }

}


//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 30,
        color: 'red'
    }
});


const styles1 = StyleSheet.create({
    wrapper: {
        height: 250
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
    ,
    swiper_view: {
        height: 200
    }


})



