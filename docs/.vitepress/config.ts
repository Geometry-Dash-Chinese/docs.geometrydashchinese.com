import {defineConfig} from "vitepress";

export default defineConfig({
    title: '几何冲刺文档站',
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Geometry Dash 文档站',
        footer: {
            message: '&copy; 2022 - ' + new Date().getFullYear() + ' | <a href="https://docs.geometrydashchinese.com">几何冲刺文档站</a> | <a href="https://beian.miit.gov.cn">吉ICP备18006293号</a>',
            copyright: '网站由 <a href="https://zhazha120.cn">渣渣120</a> 维护'
        },
        editLink: {
            pattern: 'https://github.com/Geometry-Dash-Chinese/docs.geometrydashchinese.com/edit/main/docs/:path'
        },
        sidebar: [
            {
                text: '游戏',
                items: [
                    {
                        text: '这是什么',
                        link: '/game/about'
                    },
                    {
                        text: '常用术语',
                        link: '/game/nouns'
                    }
                ]
            }
        ]
    }
});
