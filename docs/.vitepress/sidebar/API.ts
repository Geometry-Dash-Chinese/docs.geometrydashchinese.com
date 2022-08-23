import {DefaultTheme} from "vitepress";

export default {
    text: 'API',
    collapsible: true,
    collapsed: true,
    items: [
        {
            text: '注册账号',
            link: '/API/accounts/registerGJAccount'
        },
        {
            text: '登录账号',
            link: '/API/accounts/loginGJAccount'
        }
    ]
} as DefaultTheme.SidebarGroup;
