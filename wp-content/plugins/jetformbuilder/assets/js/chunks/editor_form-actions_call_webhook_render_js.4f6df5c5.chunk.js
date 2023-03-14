"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_call_webhook_render_js"],{

/***/ "./editor/form-actions/call.webhook/render.js":
/*!****************************************************!*\
  !*** ./editor/form-actions/call.webhook/render.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _JetFBComponents = JetFBComponents,\n  AdvancedModalControl = _JetFBComponents.AdvancedModalControl;\n\n/**\r\n * Internal dependencies\r\n */\nvar TextControl = wp.components.TextControl;\nfunction CallWebHookRender(_ref) {\n  var settings = _ref.settings,\n    label = _ref.label,\n    onChangeSettingObj = _ref.onChangeSettingObj;\n  /* eslint-disable jsx-a11y/no-onchange */\n  return wp.element.createElement(AdvancedModalControl, {\n    value: settings.webhook_url,\n    label: label('webhook_url'),\n    macroWithCurrent: true,\n    onChangeMacros: function onChangeMacros(name) {\n      var _settings$webhook_url;\n      return onChangeSettingObj({\n        webhook_url: ((_settings$webhook_url = settings.webhook_url) !== null && _settings$webhook_url !== void 0 ? _settings$webhook_url : '') + name\n      });\n    }\n  }, function (_ref2) {\n    var instanceId = _ref2.instanceId;\n    return wp.element.createElement(TextControl, {\n      id: instanceId,\n      value: settings.webhook_url,\n      onChange: function onChange(webhook_url) {\n        return onChangeSettingObj({\n          webhook_url: webhook_url\n        });\n      }\n    });\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallWebHookRender);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwud2ViaG9vay9yZW5kZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHVCQUVVQSxlQUFlO0VBRGxCQyxvQkFBb0Isb0JBQXBCQSxvQkFBb0I7O0FBRzNCO0FBQ0E7QUFDQTtBQUNBLElBQ09DLFdBQVcsR0FDUkMsRUFBRSxDQUFDQyxVQUFVLENBRGhCRixXQUFXO0FBR2xCLFNBQVNHLGlCQUFpQixPQUE0QztFQUFBLElBQXhDQyxRQUFRLFFBQVJBLFFBQVE7SUFBRUMsS0FBSyxRQUFMQSxLQUFLO0lBQUVDLGtCQUFrQixRQUFsQkEsa0JBQWtCO0VBRWhFO0VBQ0EsT0FBTyx5QkFBQyxvQkFBb0I7SUFDM0IsS0FBSyxFQUFHRixRQUFRLENBQUNHLFdBQWE7SUFDOUIsS0FBSyxFQUFHRixLQUFLLENBQUUsYUFBYSxDQUFJO0lBQ2hDLGdCQUFnQjtJQUNoQixjQUFjLEVBQUcsd0JBQUFHLElBQUk7TUFBQTtNQUFBLE9BQUlGLGtCQUFrQixDQUFFO1FBQzVDQyxXQUFXLEVBQUUsMEJBQ1pILFFBQVEsQ0FBQ0csV0FBVyx5RUFBSSxFQUFFLElBQ3ZCQztNQUNMLENBQUMsQ0FBRTtJQUFBO0VBQUUsR0FFSDtJQUFBLElBQUlDLFVBQVUsU0FBVkEsVUFBVTtJQUFBLE9BQVEseUJBQUMsV0FBVztNQUNuQyxFQUFFLEVBQUdBLFVBQVk7TUFDakIsS0FBSyxFQUFHTCxRQUFRLENBQUNHLFdBQWE7TUFDOUIsUUFBUSxFQUFHLGtCQUFBQSxXQUFXO1FBQUEsT0FBSUQsa0JBQWtCLENBQzNDO1VBQUVDLFdBQVcsRUFBWEE7UUFBWSxDQUFDLENBQ2Y7TUFBQTtJQUFFLEVBQ0Y7RUFBQSxFQUNvQjtBQUN4QjtBQUVBLGlFQUFlSixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwud2ViaG9vay9yZW5kZXIuanM/YTA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgQWR2YW5jZWRNb2RhbENvbnRyb2wsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0ICAgICAgVGV4dENvbnRyb2wsXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gQ2FsbFdlYkhvb2tSZW5kZXIoIHsgc2V0dGluZ3MsIGxhYmVsLCBvbkNoYW5nZVNldHRpbmdPYmogfSApIHtcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gPEFkdmFuY2VkTW9kYWxDb250cm9sXHJcblx0XHR2YWx1ZT17IHNldHRpbmdzLndlYmhvb2tfdXJsIH1cclxuXHRcdGxhYmVsPXsgbGFiZWwoICd3ZWJob29rX3VybCcgKSB9XHJcblx0XHRtYWNyb1dpdGhDdXJyZW50XHJcblx0XHRvbkNoYW5nZU1hY3Jvcz17IG5hbWUgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7XHJcblx0XHRcdHdlYmhvb2tfdXJsOiAoXHJcblx0XHRcdFx0c2V0dGluZ3Mud2ViaG9va191cmwgPz8gJydcclxuXHRcdFx0KSArIG5hbWUsXHJcblx0XHR9ICkgfVxyXG5cdD5cclxuXHRcdHsgKCB7IGluc3RhbmNlSWQgfSApID0+IDxUZXh0Q29udHJvbFxyXG5cdFx0XHRpZD17IGluc3RhbmNlSWQgfVxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLndlYmhvb2tfdXJsIH1cclxuXHRcdFx0b25DaGFuZ2U9eyB3ZWJob29rX3VybCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0eyB3ZWJob29rX3VybCB9LFxyXG5cdFx0XHQpIH1cclxuXHRcdC8+IH1cclxuXHQ8L0FkdmFuY2VkTW9kYWxDb250cm9sPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFdlYkhvb2tSZW5kZXI7XHJcbiJdLCJuYW1lcyI6WyJKZXRGQkNvbXBvbmVudHMiLCJBZHZhbmNlZE1vZGFsQ29udHJvbCIsIlRleHRDb250cm9sIiwid3AiLCJjb21wb25lbnRzIiwiQ2FsbFdlYkhvb2tSZW5kZXIiLCJzZXR0aW5ncyIsImxhYmVsIiwib25DaGFuZ2VTZXR0aW5nT2JqIiwid2ViaG9va191cmwiLCJuYW1lIiwiaW5zdGFuY2VJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/form-actions/call.webhook/render.js\n");

/***/ })

}]);