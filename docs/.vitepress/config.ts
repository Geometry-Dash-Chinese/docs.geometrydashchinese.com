import {defineConfig} from "vitepress";
import Introduction from "./sidebar/Introduction";
import API from "./sidebar/API";
import GDCN from "./sidebar/GDCN";
import GDCS from "./sidebar/GDCS";
import NGProxy from "./sidebar/NGProxy";
import GDProxy from "./sidebar/GDProxy";

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
            Introduction,
            API,
            GDCN,
            GDCS,
            GDProxy,
            NGProxy,
        ]
    }
});
