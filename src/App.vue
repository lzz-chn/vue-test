<!-- template：模版标签，相当于 react 中的 render 标签返回的jsx标签 -->
<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <!-- 路由试图容器，相当于react中的 <Route path='/' component={}/> -->
        <!-- <router-view/> -->
        <MyVue/>
        <!-- 3.调用当前组件 -->
    </div>
</template>

<!-- 当前的模版的js代码 -->
<script>
import MyVue from "./components/MyVue"; // 1.导入组件
export default {
    // 2.注册组件到当前 App.vue 中
    name: "App",
    components: { MyVue }
};
</script>

<!-- 当前的模版的css代码 -->
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
