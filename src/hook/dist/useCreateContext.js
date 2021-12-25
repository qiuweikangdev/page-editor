"use strict";
exports.__esModule = true;
exports.CreateEditorContext = exports.ContextType = void 0;
// 统一创建context 对象
var react_1 = require("react");
var registerComponent_1 = require("@/utils/registerComponent");
var ContextType;
(function (ContextType) {
    ContextType["CreateEditor"] = "createEditor";
})(ContextType = exports.ContextType || (exports.ContextType = {}));
var createContextMap = {
    createEditor: registerComponent_1.createEditor
};
exports.CreateEditorContext = react_1.createContext(createContextMap.createEditor);
function useCreateContext(contextType) {
    var contextValue = createContextMap[contextType];
    return contextValue;
}
exports["default"] = useCreateContext;
