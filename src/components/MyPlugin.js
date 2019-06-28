// 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。
// 如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。

// 1.函数形式
const MyPlugin_Fun = function(vue, option) {
    // 1.可以作为全局指令使用
    // vue.directive(...)

    // 2.可以给 Vue 添加方法和属性
    vue.myPluginValue = 'myPluginValue';
    vue.myPluginFunction = function() {
        console.log('myPluginFunction');
    };

    // 3.可以作为混入使用
    vue.mixin({
        methods: {
            plugin_log() {
                console.log('MyPlugin mixin plugin log');
            }
        }
    });

    // 4.可以给所有 Vue 实例添加原型方法
    vue.prototype.myPlugin_1 = () => {
        console.log('MyPlugin_Fun: ', option);
    };
};

// 2.对象形式
const MyPlugin_Obj = {
    plugin_1: 'plugin_1',
    plugin_2: 'plugin_2',
    // 对象形式必须使用 install 方法
    install(vue, option) {
        vue.prototype.myPlugin_2 = () => {
            console.log('MyPlugin_Obj: ', this.plugin_1, this.plugin_2, option);
        };
    }
};

export { MyPlugin_Fun, MyPlugin_Obj };
