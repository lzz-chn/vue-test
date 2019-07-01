import Vue from 'vue';

// 创建全局组建
Vue.component('component-example', {
    data() {
        return {
            num: 123
        };
    },
    template: `
        <div>
            <h3>My Component</h3>
            {{num}}
        </div>`
});

// 创建异步全局组件
Vue.component('component-async-example', function(resolve, reject) {
    let status = true; // 控制是否达到要求
    setTimeout(function() {
        if (status) {
            // 向 `resolve` 回调传递组件定义
            resolve({
                template: '<div>I am async!</div>'
            });
        } else {
            resolve({
                template: '<div>error</div>'
            });
        }
    }, 2000);
});

Vue.component('component-async-webpack-example', function(resolve) {
    // 这个特殊的 `require` 语法将会告诉 webpack
    // 自动将你的构建代码切割成多个包，这些包
    // 会通过 Ajax 请求加载
    require(['./MyColor'], resolve);
});

// 处理加载状态,这里的异步组件工厂函数也可以返回一个如下格式的对象
const AsyncComponent = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ template: '<div>AsyncComponent</div>' });
            // require(['./MyColor'], resolve); // 使用 require 调用外部的组件
            // resolve(import('./MyColor')); // 使用 import 调用外部的组件
        }, 3000);
    }),
    // component: import('./MyComponent.vue'), // 这种写法需要有网路延时的环境下才可以体现
    // 异步组件加载时使用的组件，超过 delay 时间加载的组件
    loading: { template: '<div>loading</div>' },
    // 加载失败时使用的组件，超过 timeout 时间加载的组件
    error: { template: '<div>error</div>' },
    // 展示加载时组件的延时时间，
    // 即超过此时间还未加载 component 中的组件则显示 loading 中定义的组件。
    // 默认值是 200 (毫秒)
    delay: 1000,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 5000
});

Vue.component('component-factory-async-example', AsyncComponent);
