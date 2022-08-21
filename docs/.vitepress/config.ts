import { defineConfig } from "vitepress";

export default defineConfig({
    base: process.env.VITE_BASE_PUBLIC_PATH,
    themeConfig: {
        siteTitle: '几何冲刺文档站',
        sidebar: [
            {
                text: 'GDCS',
                items: [
                    {
                        text: '指令',
                        items: [
                            {
                                text: '语法',
                                link: '/gdcs/game/command/inspect'
                            },
                            {
                                text: '账号命令',
                                items: [
                                    {
                                        text: '',
                                        items: [
                                            {
                                                text: '!test',
                                                link: '/gdcs/game/command/common/test'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text: '关卡命令',
                                items: [
                                    {
                                        text: '',
                                        items: [
                                            {
                                                text: '!test',
                                                link: '/gdcs/game/command/common/test'
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
