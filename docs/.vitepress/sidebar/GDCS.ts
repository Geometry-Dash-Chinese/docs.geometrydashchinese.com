import {DefaultTheme} from "vitepress";

export default {
    text: 'GDCS',
    collapsible: true,
    collapsed: true,
    items: [
        {
            text: '这是什么',
            link: '/GDCS/about'
        },
        {
            text: '指令系统',
            items: [
                {
                    text: '介绍',
                    link: '/GDCS/Game/Command/introduction'
                },
                {
                    text: '!test',
                    link: '/GDCS/Game/Command/Common/test'
                }
            ]
        },
        {
            text: '关卡指令',
            items: [
                {
                    text: '!rate',
                    link: '/GDCS/Game/Command/Level/rate'
                }
            ]
        }
    ]
} as DefaultTheme.SidebarGroup;
