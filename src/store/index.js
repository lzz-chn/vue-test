import Vue from 'vue'; // 引用 vue 框架
import Vuex from 'vuex'; // 引入 vuex

// Vuex是一个提供公共数据的地方，所有的组件都可访问，一般将Vuex的实例称为仓库。
Vue.use(Vuex);

const modules1 = {
    state: { data: '111' },
    mutations: {
        setModules1Data(state, arg) {
            state.data = arg;
        }
    },
    getters: {
        modules1Get(state) {
            return '312312312';
        }
    },
    actions: {
        modules1Ac(store, arg) {
            console.log('modules1Ac');
        }
    },
    // namespaced 命名空间属性，开启后可以以下方式访问模块的 mutations
    // $store.commit('modules1/setModules1Data','olaola')
    // $store.dispatch('modules1/modules1Ac','mudamuda')
    // $store.getters['modules1/modules1Get']
    namespaced: true
};
const modules2 = {
    state: { data: '222' },
    mutations: {
        setModules2Data(state, arg) {
            state.data = arg;
        }
    },
    namespaced: true
};
const store = new Vuex.Store({
    // state 属性用于存放公共数据，相当于 data
    state: {
        data1: 'yo',
        data2: '123.456'
    },
    // getters 属性用来存储公共的计算相关的方法，相当于 computed
    // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
    // 且只有当它的依赖值(state中的数据)发生了改变才会被重新计算。
    getters: {
        data1_UpperCase(state) {
            return state.data1.toUpperCase();
        },
        data2_Int(state) {
            return parseInt(state.data2);
        }
    },
    // mutations 属性用来存储公共的方法，相当于 methods
    // 实际是用来修改 state 中的数据
    // 官方只建议使用 commit
    mutations: {
        setData1(state, arg) {
            state.data1 = arg;
        },
        setData2(state, arg) {
            state.data2 = arg;
        }
    },
    // actions 属性用来控制调用 mutations 中的方法的地方
    // action 类似于 mutation，不同在于 action 提交的是 mutation，而mutation 提交的是state
    actions: {
        commitMu(store, arg) {
            store.commit('setData1', arg[0]);
            store.commit('setData2', arg[1]);
        }
    },
    modules: {
        modules1,
        modules2
    }
});

export default store;
