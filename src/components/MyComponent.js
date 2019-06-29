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

Vue.component('component-async-webpack-example', function (resolve) {
    // 这个特殊的 `require` 语法将会告诉 webpack
    // 自动将你的构建代码切割成多个包，这些包
    // 会通过 Ajax 请求加载
    require(['./MyColor'], resolve)
  })