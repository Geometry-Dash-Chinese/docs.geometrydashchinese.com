import { defineConfig } from "vitepress";

export default defineConfig({
    themeConfig: {
        siteTitle: '几何冲刺文档站',
        footer: {
            message: '几何冲刺文档站 By 渣渣120',
            copyright: '&copy; 2022 - ' + new Date().getFullYear() + ' | <a href="https://docs.geometrydashchinese.com">几何冲刺文档站</a> | <a href="https://beian.miit.gov.cn">吉ICP备18006293号</a>'
        },
        editLink: {
            pattern: 'https://github.com/Geometry-Dash-Chinese/docs.geometrydashchinese.com/edit/main/docs/:path'
        },
        sidebar: [
            {
                text: '几何冲刺',
                items: [
                    {
                        text: '关于',
                        link: '/about'
                    }
                ]
            },
            {
                text: 'GDCN',
                collapsible: true,
                items: [
                    {
                        text: '关于',
                        link: '/gdcn/about'
                    },
                    {
                        text: 'GDCS',
                        items: [
                            {
                                text: '关于',
                                link: '/gdcn/gdcs/about'
                            },
                            {
                                text: '游戏指令系统',
                                items: [
                                    {
                                        text: '语法',
                                        link: '/gdcn/gdcs/game/command/inspect'
                                    },
                                    {
                                        text: '账号相关指令',
                                        items: [
                                            {
                                                text: '',
                                                items: [
                                                    {
                                                        text: '!test',
                                                        link: '/gdcn/gdcs/game/command/common/test'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        text: '关卡相关指令',
                                        items: [
                                            {
                                                text: '',
                                                items: [
                                                    {
                                                        text: '!test',
                                                        link: '/gdcn/gdcs/game/command/common/test'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
