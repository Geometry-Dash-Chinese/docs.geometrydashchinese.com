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
        }
    ]
} as DefaultTheme.SidebarGroup;
