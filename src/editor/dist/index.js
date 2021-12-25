"use strict";
exports.__esModule = true;
var react_1 = require("react");
var panels_1 = require("./panels");
var useContextValue_1 = require("@/hook/useContextValue");
var styles_less_1 = require("./styles.less");
console.log(styles_less_1["default"]);
var Editor = function () {
    var EditorValue = useContextValue_1["default"](useContextValue_1.ContextType.CreateEditor);
    return (react_1["default"].createElement(useContextValue_1.CreateEditorContext.Provider, { value: EditorValue },
        react_1["default"].createElement("div", { className: styles_less_1["default"].editor_wrapper },
            react_1["default"].createElement("div", { className: styles_less_1["default"].editor_left },
                react_1["default"].createElement(panels_1.MaterialPanel, null)),
            react_1["default"].createElement("div", { className: styles_less_1["default"].editor_center },
                react_1["default"].createElement(panels_1.RenderPanel, null)))));
};
exports["default"] = Editor;
