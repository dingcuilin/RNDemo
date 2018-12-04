'use strict';
import Main from './src/main'
import {AppRegistry} from 'react-native';

// 注意，这里用引号括起来的 'rndemo' 必须和你 init 时创建的项目名一致
//index.js 是程序的入口文件，里面引入了 home.js 文件 ，并注册程序
AppRegistry.registerComponent('rndemo', () => Main);
// ---------------------
//     作者：freeCodeSunny
// 来源：CSDN
// 原文：https://blog.csdn.net/xueshanhaizi/article/details/52873626
//     版权声明：本文为博主原创文章，转载请附上博文链接！
