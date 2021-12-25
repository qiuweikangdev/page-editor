"use strict";
exports.__esModule = true;
exports.createEditor = void 0;
var antd_1 = require("antd");
var react_1 = require("react");
// 创建编辑拖拽组件
var createEditorComponent = function () {
    var componentsList = [];
    var componentsMap = {};
    return {
        register: function (component) {
            componentsList.push(component);
            componentsMap[component.key] = component;
        },
        componentsList: componentsList,
        componentsMap: componentsMap
    };
};
// 可通过webpack打包动态去加载组件
// 格式
// {
//   label:'文本',
//   preview:()=>'预览文本',
//   render:()=>'渲染文本',
//   key:'text'
// }
exports.createEditor = createEditorComponent();
exports.createEditor.register({
    label: '文本',
    preview: function () { return '预览文本'; },
    render: function () { return '渲染文本'; },
    key: 'text'
});
exports.createEditor.register({
    label: '按钮',
    preview: function () { return react_1["default"].createElement(antd_1.Button, null, "\u9884\u89C8\u6309\u94AE"); },
    render: function () { return react_1["default"].createElement(antd_1.Button, null, "\u6309\u94AE"); },
    key: 'button'
});
