import {DefaultTheme} from "vitepress";

export default {
    text: 'API',
    collapsible: true,
    collapsed: true,
    items: [
        {
            text: '注册账号',
            link: '/api/accounts/registerGJAccount'
        },
        {
            text: '登录账号',
            link: '/api/accounts/loginGJAccount'
        }
    ]
} as DefaultTheme.SidebarGroup;
