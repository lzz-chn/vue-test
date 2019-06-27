// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'; // 引用 vue 框架
import App from './App'; // 引用 App.vue 根组件
import router from './router'; // 引用路由文件

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app', // 表示当前实例在 index.html 文件中 id="app" 的标签
    router, // 表示当前 vue实例的路由配置文件
    components: { App }, // 表示当前实例可以使用的 组件
    data: { dio: 'mudamudamudamuda', jojo: 'olaolaolaola' },
    provide() {
        return { dio: 'mudamudamuda' };
    },
    template: '<App/>' // 表示当前实例使用的模版为 App.vue
});
