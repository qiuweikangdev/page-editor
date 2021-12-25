"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
// 低代码平台的核心布局，主要分为左中右三部分
// 1.左边叫物料堆，每做一个组件就往里面放一个，随着需求的扩大，数量会慢慢增加
// 2.中间叫主舞台，左侧物料堆里的组件经拖拽放入，主舞台，由渲染引擎解析，显示组件界面
// 3.右边是编辑面板，也可以称它为可视化面板配置界面，这里可以根据需求自主定义JSON配置项。
require("./styles.less");
var MaterialPanel_1 = require("./MaterialPanel");
__createBinding(exports, MaterialPanel_1, "default", "MaterialPanel");
var RenderPanel_1 = require("./RenderPanel");
__createBinding(exports, RenderPanel_1, "default", "RenderPanel");
var ToolbarPanel_1 = require("./ToolbarPanel");
__createBinding(exports, ToolbarPanel_1, "default", "ToolbarPanel");
