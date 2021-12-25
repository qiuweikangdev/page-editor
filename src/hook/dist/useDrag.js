"use strict";
exports.__esModule = true;
var react_1 = require("react");
var domTarget_1 = require("@/utils/domTarget");
var useLatest_1 = require("./useLatest");
// data: 拖拽的内容、 target：dom节点对象，options一些方法的选项
var useDrag = function (data, target, options) {
    if (options === void 0) { options = {}; }
    var optionsRef = useLatest_1["default"](options);
    react_1.useEffect(function () {
        var targetElement = domTarget_1.getTargetElement(target);
        if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
            return undefined;
        }
        targetElement.setAttribute('draggable', 'true');
        var onDragStart = function (event) {
            var _a, _b;
            (_b = (_a = optionsRef.current).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            event.dataTransfer.setData('custom', JSON.stringify(data));
        };
        var onDragEnd = function (event) {
            var _a, _b;
            (_b = (_a = optionsRef.current).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        targetElement.addEventListener('dragstart', onDragStart);
        targetElement.addEventListener('dragend', onDragEnd);
        return function () {
            // 拖拽元素卸载的时候，移除事件监听
            targetElement.removeEventListener('dragstart', onDragStart);
            targetElement.removeEventListener('dragend', onDragStart);
        };
    }, []);
};
exports["default"] = useDrag;
