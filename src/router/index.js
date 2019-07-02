import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MyRouter from '@/components/MyRouter';
import MyRouterTest from '@/components/MyRouterTest';
Vue.use(Router); // 安装 Router 插件到 Vue

// export default new Router({
//     routes: [
//         // {
//         //     path: '/', // 路由地址
//         //     name: 'HelloWorld', // 路由名称可以用跳转
//         //     component: HelloWorld // 路由对应的组件
//         // },
//         {
//             path: '/',
//             name: 'MyRouter',
//             component: MyRouter
//         },
//         {
//             path: '/yo',
//             name: 'Yo',
//             component: {
//                 template: `
//                     <div>Yo.</div>
//                 `
//             }
//         },
//         {
//             path: '/jojo',
//             component: {
//                 template: `
//                     <div>ola ola ola</div>
//                 `
//             }
//         },
//         {
//             path: '/dio',
//             name: 'Dio',
//             component: {
//                 template: `
//                     <div>muda muda muda</div>
//                 `
//             }
//         },
//         {
//             path: '/dio/:id',
//             name: 'Dio/',
//             component: {
//                 template: `
//                     <div>dio : {{$route.params.id}}</div>
//                 `
//             }
//         },
//         {
//             path: '/404',
//             component: {
//                 template: `
//                     <div>
//                         <b-alert variant="danger" show>
//                            route address is not found
//                         </b-alert>
//                     </div>
//                 `
//             }
//         },
//         {
//             path: '*', // * 表示匹配所有路由
//             redirect: '/404' // 若以下所有路由地址都不匹配，则重定向到 /404 路由
//         }
//     ]
// });

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: {
//                 template: `
//                     <div>home</div>
//                 `
//             },
//             beforeEnter: (to, from, next) => {
//                 console.log('路由独享的守卫');
//                 next();
//             }
//         },
//         {
//             path: '/web',
//             name: 'web',
//             component: MyRouterTest,
//             // 二级路由
//             children: [
//                 {
//                     path: 'html',
//                     component: {
//                         template: `
//                             <div>HyperText Markup Language</div>
//                         `
//                     }
//                 },
//                 {
//                     path: 'js',
//                     component: {
//                         template: `
//                             <div>JavaScript</div>
//                         `
//                     }
//                 },
//                 {
//                     path: 'css',
//                     component: {
//                         template: `
//                             <div>Cascading Style Sheets</div>
//                         `
//                     }
//                 }
//             ]
//         }
//     ]
// });

export default new Router({
    routes: [
        {
            path: '/',
            component: {
                template: `
                    <div>
                        <h3>首页</h3>
                    </div>
                `
            },
            path: '/admin',
            redirect: '/admin/index',
            component: {
                template: `
                <div>
                    <h3>后端管理系统页面</h3>
                    <b-alert variant="success" show>
                        <router-view />
                    </b-alert>
                </div> 
                `
            },
            children: [
                {
                    path: 'login',
                    component: {
                        template: ` <div>登陆页面</div>`
                    }
                },
                {
                    path: 'index',
                    component: {
                        template: `<div>后端首页</div>`
                    }
                }
            ]
        }
    ]
});
