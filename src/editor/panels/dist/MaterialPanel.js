"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// 物料面板
var react_1 = require("react");
var useContextValue_1 = require("@/hook/useContextValue");
var useDrag_1 = require("@/hook/useDrag");
var DragComponent = function (props) {
    var label = props.label, preview = props.preview;
    var dragRef = react_1.useRef(null);
    useDrag_1["default"](label, dragRef, {
        onDragStart: function (event) {
            console.log(event);
        }
    });
    return (react_1["default"].createElement("div", { ref: dragRef }, preview()));
};
var MaterialPanel = function () {
    var createEditorContext = react_1.useContext(useContextValue_1.CreateEditorContext);
    var componentsList = createEditorContext.componentsList;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null, "\u7269\u6599\u9762\u677F"),
        componentsList.map(function (item) { return (react_1["default"].createElement(DragComponent, __assign({}, item, { key: item.key }))); })));
};
exports["default"] = MaterialPanel;
