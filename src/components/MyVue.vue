<template>
    <div class="MyVue">
        <p>My Vue</p>
        <!-- 表达式 -->
        {{1+1}}
        {{new Date().toLocaleDateString()}}
        {{aa}}
        <!-- {{yo()}} -->
        <!-- 使用常见的指令 -->
        <!-- v-text 相当于 innerText -->
        <div v-text="aa"></div>

        <!-- v-html 相当于 innerHtml -->
        <div v-html="'<h1>Yo.</h1>'"></div>

        <!-- v-model 相当于标签 value 的值。
		可用于双向数据绑定，即：v-model的值发生变化时，aa的值也会变化。
        v-model 指令一般用于有 value 属性的标签上-->
        <input type="text" v-model="aa">

        <!-- v-show 显示隐藏 -->
        <div v-show="true">显示的标签</div>
        <div v-show="false">隐藏的标签{{1+1}}</div>

        <!-- if -->
        <div v-if="true">显示的标签</div>
        <div v-if="false">隐藏的标签{{1+1}}</div>

        <!-- if...else -->
        <div v-if="false">显示if中的内容</div>
        <div v-else>显示else中的内容</div>

        <!-- if...else 嵌套 -->
        <div v-if="false">显示v-if-1中的内容</div>
        <div v-else-if="false">显示v-if-2中的内容</div>
        <div v-else-if="true">显示v-if-3中的内容</div>
        <div v-else-if="false">显示v-if-4中的内容</div>
        <div v-else>显示v-else中的内容</div>

        <!-- for  v-bind:key=" " -->
        <!-- key 的目的是 -->
        <ul>
            <!-- v 表示遍历数据的值 -->
            <li v-for="v in [1,2,3,4]" v-bind:key="v">{{v}}</li>
            <!-- i 表示遍历数据的索引号 -->
            <li v-for="(v,i) in [1,2,3,4]" v-bind:key="v">{{i}} : {{v}}</li>
            <!-- key 表示遍历对象的属性名 -->
            <li
                v-for="(v,key,i) in {id:42,name:'王二狗',sex:'male'}"
                v-bind:key="key"
            >{{i}} : {{v}} : {{key}}</li>
        </ul>

        <!-- 项目标签列表：dl表示项目列表，dt表示项目标题，dd表示项目标题下栏目列表 -->
        <dl>
            <template v-for="v in ['一','二','三','四',]" v-bind:accessKey="v">
                <dt :key="v">项目名称{{v}}</dt>
                <dd :key="v+1">项目具体栏目数据{{v}}</dd>
                <dd :key="v+2">项目具体栏目数据{{v}}</dd>
                <dd :key="v+3">项目具体栏目数据{{v}}</dd>
                <dd :key="v+4">项目具体栏目数据{{v}}</dd>
            </template>
        </dl>

        <!-- v-once 指令的特点是只渲染一次,若数据更新也不会渲染 -->
        <input type="text" v-model="aa">
        <span>{{aa}}</span>
        <span v-once>{{aa}}</span>

        <!-- v-pre 不编译双大括号内的内容 -->
        <div v-pre>{{1+1}}</div>
        <div v-pre>{{yo()}}</div>

        <!-- v-model.trim 去除输入的空格 -->
        <input type="text" v-model.trim="aa">
        <input type="text" v-model="aa">
        <br>

        <!-- v-model.number 转换为数字类型 -->
        转换为数字：
        <input type="text" v-model.number="str">
        {{str+1}}
        <br>未转换为数字：
        <input type="text" v-model="str">
        {{str+1}}
        <!-- v-model.lazy 相当于change事件，在失去焦点时触发事件 -->
        v-model.lazy :
        <input type="text" v-model.lazy="aa">
        <br>

        <!-- v-cloak 这个指令保持在元素上直到关联实例结束编译。 -->
        <!-- {{delay()}} -->
        <div v-cloak>{{ str }}</div>

        <!-- v-bind 动态属性绑定 -->
        <div v-bind:class="vBind">v-bind</div>
        <!-- 动态绑定 class类名 -->
        <div :class="vBind">v-bind</div>
        <!-- 动态绑定的简写 -->
        <div class="vBind">v-bind</div>
        <!-- 静态的类名 -->

        <!-- v-on 或 @ 事件绑定 -->
        <button v-on:click="yo()">按钮</button>
        <button @click="yo()">按钮</button>
    </div>
</template>

<script>
export default {
    name: "MyVue",
    data: () => {
        return { aa: 233, str: "2333", vBind: "v-bind-bind" };
    },
    methods: {
        yo() {
            alert("yo.");
        }
    }
};
</script>

<style>
[v-cloak] {
    display: none;
}
</style>
