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
                    link: '/GDCS/game/command/introduction'
                },
                {
                    text: '!test',
                    link: '/GDCS/game/command/common/test'
                }
            ]
        }
    ]
} as DefaultTheme.SidebarGroup;
