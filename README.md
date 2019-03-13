／***********安装使用vue-cli*************/
1 安装cli
  npm install -g vue-cli
  npm uninstall vue-cli -g
2 初始化项目
  vue init webpack my-project
3 进入项目
  cd 项目
4 下载模块
  npm install
5 运行模块
  npm run dev



/********登录模块**********/

1安装elementUi   安装并且将配置写入dependiens中
npm i element-ui -S   ===npm i module_name  -S  = >  npm install module_name --save
2 引入
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI)




/**********使用mock数据******/
npm install mockjs --save-dev


/*********使用axios**********/
npm install axios --save-dev




/**********使用i18n教程*******/
npm install vue-i18n --save






/*********使用多个template标签*******/
template不会渲染成元素，用div的话会被渲染成元素。
把if,show,for等语句抽取出来放在template上面，
把绑定的事件放在temlpate里面的元素上，可以使html结构更加清晰，
还可以改善一个标签过长的情况。




/************vue中的组件和本地数据存储********/
store是原来存储组件状态的，不是用来做本地数据存储的。
            本地存储可以用localStorage/sessionStorage或者cookie。

let arr = [];

// 在某个事件中加入了一个值 [1]
// 再次刷新时 相当于又重新声明了 所以没有值
页面刷新后store中的数据会恢复初始状态




/************浏览器跳转和路由跳转之间的区别********/

https://www.cnblogs.com/hity-tt/p/7056542.html



/*************使用JS-COOKIE********************/
cnpm i js-cookie


/*************使用VUEX*************************/
npm install vuex --save


//使用sass
npm install sass-loader --save
npm install node-sass --save


//配置sass全局变量
npm install sass-resources-loader --save-dev


scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/assets/your.scss')
        }
      }
    )




/*****我这种实现方式，是在“用户刷新页面时”。
      在初始化方法里请求AJAX，所以不能实时提醒消息。
      想实现的话可以用websocket。用户评论时、发送系统消息时，检测用户是否在线。再具体操作就可以了。******/





v-bind  简写:

b-on    简写@
