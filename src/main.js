// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'; // 引用 vue 框架
import App from './App'; // 引用 App.vue 根组件
import router from './router'; // 引用路由文件
import BootstrapVue from 'bootstrap-vue';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { MyPlugin_Fun, MyPlugin_Obj } from './components/MyPlugin';
import MyComponent from './components/MyComponent';
import store from './store';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

// 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。
// 插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。
Vue.mixin({
    methods: {
        mixin_ajax() {
            console.log('mixin 请求ajax');
        }
    }
});

// 利用在 Vue 原型上添加方法实现全局使用
Vue.prototype.ajax = () => {
    console.log('prototype ajax');
};

// 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。
// 如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
// 该方法需要在调用 new Vue() 之前被调用。
// Vue.use(MyPlugin_Fun, 'olaolaola');
// Vue.use(MyPlugin_Obj, 'mudamudamuda');
// // 调用 MyPlugin_Fun 插件中的 myPluginFunction()方法
// Vue.myPluginFunction();
// // 打印 MyPlugin_Fun 插件中的myPluginValue的属性
// console.log('Vue.myPluginValue:', Vue.myPluginValue);

// // 全局前置守卫
// router.beforeEach((to, from, next) => {
//     // console.log('to :', to); // to 代表即将进入的路由
//     // console.log('from :', from); // from 表示正要离开的路由
//     console.log('全局前置守卫');
//     next(); // 继续执行当前匹配
// });

// // 全局解析守卫 在所有内部守卫与异步路由组件被解析后执行
// router.beforeResolve((to, from, next) => {
//     console.log('全局解析守卫');
//     next(); // 继续执行当前匹配
// });

// // 全局后置钩子 DOM渲染前触发
// router.afterEach((to, from) => {
//     console.log('全局后置钩子');
// });

// 账号登陆练习
router.beforeEach((to, from, next) => {
    let login = false;

    if (to.fullPath == '/admin/index') {
        if (login) {
            next();
        } else {
            next('/admin/login');
        }
    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app', // 表示当前实例在 index.html 文件中 id="app" 的标签
    router, // 表示当前 vue实例的路由配置文件
    store,
    components: { App }, // 表示当前实例可以使用的 组件
    data: { dio: 'mudamudamudamuda', jojo: 'olaolaolaola' },
    provide() {
        return { dio: 'mudamudamuda' };
    },
    template: '<App/>' // 表示当前实例使用的模版为 App.vue
});
