'use strict';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import TabNavigator from 'react-native-tab-navigator'
import Main from './src/main'

// import React from 'react';


import {
    AppRegistry, Button, Image,
    StyleSheet,
    Text, TextInput,
    View
} from 'react-native';


class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
    }

    onBtnClick = () => {
        alert("111")
    }

    render() {


        return (


            <View style={styles.container}>
                <Text style={styles.hello}>Hello, World ,first Project</Text>
                <Text style={styles.desc}> 描述，样式</Text>

                <Text style={{fontWeight: 'bold'}}>
                    I am bold
                    <Text style={{color: 'red'}}>
                        and red
                    </Text>

                </Text>


                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Type here to translate!"
                />
                {/*<Button*/}
                {/*title="去登录"*/}
                {/*onPress={() =>this.props.navigation('Home')}*/}
                {/*/>*/}

                <Swiper style={styles1.wrapper} showsButtons={true}>
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
        )


    }
}


const styles1 = StyleSheet.create({
    wrapper: {},
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
})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    desc: {
        fontSize: 16,
        textAlign: 'center',
        margin: 4,
    },
    textInputStyle: {
        width: 200,
        height: 40,
        backgroundColor: '#008080'
    }
});


// 注意，这里用引号括起来的 'rndemo' 必须和你 init 时创建的项目名一致
//index.js 是程序的入口文件，里面引入了 home.js 文件 ，并注册程序
AppRegistry.registerComponent('rndemo', () => Main);
// ---------------------
//     作者：freeCodeSunny
// 来源：CSDN
// 原文：https://blog.csdn.net/xueshanhaizi/article/details/52873626
//     版权声明：本文为博主原创文章，转载请附上博文链接！