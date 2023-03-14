"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_redirect_to_page_render_js"],{

/***/ "./editor/form-actions/redirect.to.page/render.js":
/*!********************************************************!*\
  !*** ./editor/form-actions/redirect.to.page/render.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar _JetFBActions = JetFBActions,\n  getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;\nvar _JetFBComponents = JetFBComponents,\n  AdvancedModalControl = _JetFBComponents.AdvancedModalControl;\n\n/**\r\n * Internal dependencies\r\n */\nvar _wp$components = wp.components,\n  TextControl = _wp$components.TextControl,\n  ToggleControl = _wp$components.ToggleControl,\n  SelectControl = _wp$components.SelectControl,\n  BaseControl = _wp$components.BaseControl,\n  CheckboxControl = _wp$components.CheckboxControl;\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n  useState = _wp$element.useState,\n  useEffect = _wp$element.useEffect;\nvar _JetFBHooks = JetFBHooks,\n  withRequestFields = _JetFBHooks.withRequestFields;\nvar withSelect = wp.data.withSelect;\nvar applyFilters = wp.hooks.applyFilters;\nfunction RedirectToPageRender(props) {\n  var source = props.source,\n    label = props.label,\n    settings = props.settings,\n    onChangeSetting = props.onChangeSetting,\n    onChangeSettingObj = props.onChangeSettingObj,\n    requestFields = props.requestFields;\n  var _useState = useState(source.redirect_types),\n    _useState2 = _slicedToArray(_useState, 2),\n    typePages = _useState2[0],\n    setTypePages = _useState2[1];\n  var _useState3 = useState([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    fields = _useState4[0],\n    setFields = _useState4[1];\n  useEffect(function () {\n    var hasInserted = requestFields.findIndex(function (field) {\n      return 'inserted_post_id' === field.value;\n    });\n    if (-1 === hasInserted) {\n      setTypePages(function (prev) {\n        return prev.filter(function (type) {\n          return 'inserted_post' !== type.value;\n        });\n      });\n    }\n    var filterTypes = applyFilters('jet.fb.redirect_to_page.types', [], props);\n    if (filterTypes.length) {\n      setTypePages(function (prev) {\n        return [].concat(_toConsumableArray(prev), _toConsumableArray(filterTypes));\n      });\n    }\n    setFields([].concat(_toConsumableArray(getFormFieldsBlocks()), _toConsumableArray(requestFields)));\n  }, []);\n  var isChecked = function isChecked(name) {\n    var args_fields = Array.from(settings.redirect_args || []);\n    return Boolean(args_fields.includes(name));\n  };\n  var onChangeRedirectArgs = function onChangeRedirectArgs(value, field_name) {\n    var redirect_args = Array.from(settings.redirect_args || []);\n    if (!value) {\n      var field_id = redirect_args.indexOf(field_name);\n      redirect_args.splice(field_id, 1);\n    } else {\n      redirect_args.push(field_name);\n    }\n    onChangeSettingObj({\n      redirect_args: redirect_args\n    });\n  };\n\n  /* eslint-disable jsx-a11y/no-onchange */\n  return wp.element.createElement(\"div\", {\n    key: \"redirect_to_page\"\n  }, wp.element.createElement(SelectControl, {\n    className: \"full-width\",\n    key: \"redirect_type\",\n    label: label('redirect_type'),\n    labelPosition: \"side\",\n    value: settings.redirect_type,\n    options: typePages,\n    onChange: function onChange(redirect_type) {\n      return onChangeSettingObj({\n        redirect_type: redirect_type\n      });\n    }\n  }), 'static_page' === settings.redirect_type && wp.element.createElement(SelectControl, {\n    key: \"redirect_type_page\",\n    className: \"full-width\",\n    label: label('redirect_page'),\n    labelPosition: \"side\",\n    value: settings.redirect_page,\n    options: source.pages,\n    onChange: function onChange(redirect_page) {\n      return onChangeSettingObj({\n        redirect_page: redirect_page\n      });\n    }\n  }), 'custom_url' === settings.redirect_type && wp.element.createElement(AdvancedModalControl, {\n    value: settings.redirect_url,\n    label: label('redirect_url'),\n    macroWithCurrent: true,\n    onChangePreset: function onChangePreset(redirect_url) {\n      return onChangeSettingObj({\n        redirect_url: redirect_url\n      });\n    },\n    onChangeMacros: function onChangeMacros(name) {\n      var _settings$redirect_ur;\n      return onChangeSettingObj({\n        redirect_url: ((_settings$redirect_ur = settings.redirect_url) !== null && _settings$redirect_ur !== void 0 ? _settings$redirect_ur : '') + name\n      });\n    }\n  }, function (_ref) {\n    var instanceId = _ref.instanceId;\n    return wp.element.createElement(TextControl, {\n      id: instanceId,\n      value: settings.redirect_url,\n      onChange: function onChange(redirect_url) {\n        return onChangeSettingObj({\n          redirect_url: redirect_url\n        });\n      }\n    });\n  }), wp.element.createElement(BaseControl, {\n    label: label('redirect_args'),\n    key: \"redirect_args_control\"\n  }, wp.element.createElement(\"div\", {\n    className: \"jet-user-fields-map__list\"\n  }, fields.map(function (_ref2, index) {\n    var name = _ref2.name;\n    return wp.element.createElement(CheckboxControl, {\n      key: \"checkbox_args_\".concat(name, \"_\").concat(index),\n      label: name,\n      checked: isChecked(name),\n      onChange: function onChange(newVal) {\n        return onChangeRedirectArgs(newVal, name);\n      }\n    });\n  }))), wp.element.createElement(TextControl, {\n    key: \"redirect_hash_control\",\n    label: label('redirect_hash'),\n    value: settings.redirect_hash,\n    onChange: function onChange(redirect_hash) {\n      return onChangeSettingObj({\n        redirect_hash: redirect_hash\n      });\n    }\n  }));\n  /* eslint-enable jsx-a11y/no-onchange */\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect(withRequestFields)(RedirectToPageRender));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZGlyZWN0LnRvLnBhZ2UvcmVuZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBRVVBLFlBQVk7RUFEZkMsbUJBQW1CLGlCQUFuQkEsbUJBQW1CO0FBRzFCLHVCQUVVQyxlQUFlO0VBRGxCQyxvQkFBb0Isb0JBQXBCQSxvQkFBb0I7O0FBRzNCO0FBQ0E7QUFDQTtBQUNBLHFCQU1VQyxFQUFFLENBQUNDLFVBQVU7RUFMaEJDLFdBQVcsa0JBQVhBLFdBQVc7RUFDWEMsYUFBYSxrQkFBYkEsYUFBYTtFQUNiQyxhQUFhLGtCQUFiQSxhQUFhO0VBQ2JDLFdBQVcsa0JBQVhBLFdBQVc7RUFDWEMsZUFBZSxrQkFBZkEsZUFBZTtBQUd0QixJQUFRQyxFQUFFLEdBQUtQLEVBQUUsQ0FBQ1EsSUFBSSxDQUFkRCxFQUFFO0FBRVYsa0JBR1VQLEVBQUUsQ0FBQ1MsT0FBTztFQUZiQyxRQUFRLGVBQVJBLFFBQVE7RUFDUkMsU0FBUyxlQUFUQSxTQUFTO0FBR2hCLGtCQUE4QkMsVUFBVTtFQUFoQ0MsaUJBQWlCLGVBQWpCQSxpQkFBaUI7QUFFekIsSUFBUUMsVUFBVSxHQUFLZCxFQUFFLENBQUNlLElBQUksQ0FBdEJELFVBQVU7QUFFbEIsSUFBUUUsWUFBWSxHQUFLaEIsRUFBRSxDQUFDaUIsS0FBSyxDQUF6QkQsWUFBWTtBQUVwQixTQUFTRSxvQkFBb0IsQ0FBRUMsS0FBSyxFQUFHO0VBRXRDLElBQ09DLE1BQU0sR0FNSEQsS0FBSyxDQU5SQyxNQUFNO0lBQ05DLEtBQUssR0FLRkYsS0FBSyxDQUxSRSxLQUFLO0lBQ0xDLFFBQVEsR0FJTEgsS0FBSyxDQUpSRyxRQUFRO0lBQ1JDLGVBQWUsR0FHWkosS0FBSyxDQUhSSSxlQUFlO0lBQ2ZDLGtCQUFrQixHQUVmTCxLQUFLLENBRlJLLGtCQUFrQjtJQUNsQkMsYUFBYSxHQUNWTixLQUFLLENBRFJNLGFBQWE7RUFHcEIsZ0JBQW9DZixRQUFRLENBQUVVLE1BQU0s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MEJBQXFCQSxJQUFJLGNBQU1tQixLQUFLLENBQUs7TUFDNUMsS0FBSyxFQUFHbkIsSUFBTTtNQUNkLE9BQU8sRUFBR0QsU0FBUyxDQUFFQyxJQUFJLENBQUk7TUFDN0IsUUFBUSxFQUFHLGtCQUFBb0IsTUFBTTtRQUFBLE9BQUliLG9CQUFvQixDQUFFYSxNQUFNLEVBQ2hEcEIsSUFBSSxDQUFFO01BQUE7SUFBRSxFQUNSO0VBQUEsRUFDRixDQUNJLENBQ08sRUFDZCx5QkFBQyxXQUFXO0lBQ1gsR0FBRyxFQUFDLHVCQUF1QjtJQUMzQixLQUFLLEVBQUdwQixLQUFLLENBQUUsZUFBZSxDQUFJO0lBQ2xDLEtBQUssRUFBR0MsUUFBUSxDQUFDd0MsYUFBZTtJQUNoQyxRQUFRLEVBQUcsa0JBQUFBLGFBQWE7TUFBQSxPQUFJdEMsa0JBQWtCLENBQzdDO1FBQUVzQyxhQUFhLEVBQWJBO01BQWMsQ0FBQyxDQUFFO0lBQUE7RUFBRSxFQUNyQixDQUNHO0VBRVA7QUFDRDs7QUFFQSxpRUFBZWhELFVBQVUsQ0FBRUQsaUJBQWlCLENBQUUsQ0FBRUssb0JBQW9CLENBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZGlyZWN0LnRvLnBhZ2UvcmVuZGVyLmpzP2U0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQWR2YW5jZWRNb2RhbENvbnRyb2wsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0ICAgICAgVGV4dENvbnRyb2wsXHJcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcclxuXHQgICAgICBTZWxlY3RDb250cm9sLFxyXG5cdCAgICAgIEJhc2VDb250cm9sLFxyXG5cdCAgICAgIENoZWNrYm94Q29udHJvbCxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVN0YXRlLFxyXG5cdCAgICAgIHVzZUVmZmVjdCxcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZnVuY3Rpb24gUmVkaXJlY3RUb1BhZ2VSZW5kZXIoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBzb3VyY2UsXHJcblx0XHQgICAgICBsYWJlbCxcclxuXHRcdCAgICAgIHNldHRpbmdzLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nT2JqLFxyXG5cdFx0ICAgICAgcmVxdWVzdEZpZWxkcyxcclxuXHQgICAgICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IFsgdHlwZVBhZ2VzLCBzZXRUeXBlUGFnZXMgXSA9IHVzZVN0YXRlKCBzb3VyY2UucmVkaXJlY3RfdHlwZXMgKTtcclxuXHRjb25zdCBbIGZpZWxkcywgc2V0RmllbGRzIF0gICAgICAgPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRjb25zdCBoYXNJbnNlcnRlZCA9IHJlcXVlc3RGaWVsZHMuZmluZEluZGV4KFxyXG5cdFx0XHRmaWVsZCA9PiAnaW5zZXJ0ZWRfcG9zdF9pZCcgPT09IGZpZWxkLnZhbHVlICk7XHJcblxyXG5cdFx0aWYgKCAtMSA9PT0gaGFzSW5zZXJ0ZWQgKSB7XHJcblx0XHRcdHNldFR5cGVQYWdlcyhcclxuXHRcdFx0XHRwcmV2ID0+IHByZXYuZmlsdGVyKCB0eXBlID0+ICdpbnNlcnRlZF9wb3N0JyAhPT0gdHlwZS52YWx1ZSApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZmlsdGVyVHlwZXMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVkaXJlY3RfdG9fcGFnZS50eXBlcycsIFtdLFxyXG5cdFx0XHRwcm9wcyApO1xyXG5cclxuXHRcdGlmICggZmlsdGVyVHlwZXMubGVuZ3RoICkge1xyXG5cdFx0XHRzZXRUeXBlUGFnZXMoIHByZXYgPT4gKFxyXG5cdFx0XHRcdFsgLi4ucHJldiwgLi4uZmlsdGVyVHlwZXMgXVxyXG5cdFx0XHQpICk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0RmllbGRzKCBbIC4uLmdldEZvcm1GaWVsZHNCbG9ja3MoKSwgLi4ucmVxdWVzdEZpZWxkcyBdICk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3QgaXNDaGVja2VkID0gZnVuY3Rpb24gKCBuYW1lICkge1xyXG5cdFx0Y29uc3QgYXJnc19maWVsZHMgPSBBcnJheS5mcm9tKCBzZXR0aW5ncy5yZWRpcmVjdF9hcmdzIHx8IFtdICk7XHJcblxyXG5cdFx0cmV0dXJuIEJvb2xlYW4oIGFyZ3NfZmllbGRzLmluY2x1ZGVzKCBuYW1lICkgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZVJlZGlyZWN0QXJncyA9IGZ1bmN0aW9uICggdmFsdWUsIGZpZWxkX25hbWUgKSB7XHJcblx0XHRsZXQgcmVkaXJlY3RfYXJncyA9IEFycmF5LmZyb20oIHNldHRpbmdzLnJlZGlyZWN0X2FyZ3MgfHwgW10gKTtcclxuXHJcblx0XHRpZiAoICF2YWx1ZSApIHtcclxuXHRcdFx0Y29uc3QgZmllbGRfaWQgPSByZWRpcmVjdF9hcmdzLmluZGV4T2YoIGZpZWxkX25hbWUgKTtcclxuXHJcblx0XHRcdHJlZGlyZWN0X2FyZ3Muc3BsaWNlKCBmaWVsZF9pZCwgMSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJlZGlyZWN0X2FyZ3MucHVzaCggZmllbGRfbmFtZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uQ2hhbmdlU2V0dGluZ09iaiggeyByZWRpcmVjdF9hcmdzIH0gKTtcclxuXHR9O1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGtleT1cInJlZGlyZWN0X3RvX3BhZ2VcIj5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF90eXBlXCJcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfdHlwZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfdHlwZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHR5cGVQYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF90eXBlID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdHsgcmVkaXJlY3RfdHlwZSB9ICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHR7ICdzdGF0aWNfcGFnZScgPT09IHNldHRpbmdzLnJlZGlyZWN0X3R5cGUgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF90eXBlX3BhZ2VcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9wYWdlJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF9wYWdlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBhZ2VzIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IHJlZGlyZWN0X3BhZ2UgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyByZWRpcmVjdF9wYWdlIH0gKSB9XHJcblx0XHRcdC8+IH1cclxuXHJcblx0XHRcdHsgJ2N1c3RvbV91cmwnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxBZHZhbmNlZE1vZGFsQ29udHJvbFxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfdXJsIH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfdXJsJyApIH1cclxuXHRcdFx0XHRtYWNyb1dpdGhDdXJyZW50XHJcblx0XHRcdFx0b25DaGFuZ2VQcmVzZXQ9eyByZWRpcmVjdF91cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyByZWRpcmVjdF91cmwgfSxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0XHRvbkNoYW5nZU1hY3Jvcz17IG5hbWUgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7XHJcblx0XHRcdFx0XHRyZWRpcmVjdF91cmw6IChcclxuXHRcdFx0XHRcdFx0c2V0dGluZ3MucmVkaXJlY3RfdXJsID8/ICcnXHJcblx0XHRcdFx0XHQpICsgbmFtZSxcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyAoIHsgaW5zdGFuY2VJZCB9ICkgPT4gPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF91cmwgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF91cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0XHR7IHJlZGlyZWN0X3VybCB9LFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L0FkdmFuY2VkTW9kYWxDb250cm9sPiB9XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9hcmdzJyApIH1cclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF9hcmdzX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtdXNlci1maWVsZHMtbWFwX19saXN0XCI+XHJcblx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoICggeyBuYW1lIH0sIGluZGV4ICkgPT4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IGBjaGVja2JveF9hcmdzXyR7IG5hbWUgfV8keyBpbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBuYW1lIH1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNDaGVja2VkKCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlUmVkaXJlY3RBcmdzKCBuZXdWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHQvPixcclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF9oYXNoX2NvbnRyb2xcIlxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9oYXNoJyApIH1cclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X2hhc2ggfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcmVkaXJlY3RfaGFzaCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHR7IHJlZGlyZWN0X2hhc2ggfSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCB3aXRoUmVxdWVzdEZpZWxkcyApKCBSZWRpcmVjdFRvUGFnZVJlbmRlciApO1xyXG5cclxuIl0sIm5hbWVzIjpbIkpldEZCQWN0aW9ucyIsImdldEZvcm1GaWVsZHNCbG9ja3MiLCJKZXRGQkNvbXBvbmVudHMiLCJBZHZhbmNlZE1vZGFsQ29udHJvbCIsIndwIiwiY29tcG9uZW50cyIsIlRleHRDb250cm9sIiwiVG9nZ2xlQ29udHJvbCIsIlNlbGVjdENvbnRyb2wiLCJCYXNlQ29udHJvbCIsIkNoZWNrYm94Q29udHJvbCIsIl9fIiwiaTE4biIsImVsZW1lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkpldEZCSG9va3MiLCJ3aXRoUmVxdWVzdEZpZWxkcyIsIndpdGhTZWxlY3QiLCJkYXRhIiwiYXBwbHlGaWx0ZXJzIiwiaG9va3MiLCJSZWRpcmVjdFRvUGFnZVJlbmRlciIsInByb3BzIiwic291cmNlIiwibGFiZWwiLCJzZXR0aW5ncyIsIm9uQ2hhbmdlU2V0dGluZyIsIm9uQ2hhbmdlU2V0dGluZ09iaiIsInJlcXVlc3RGaWVsZHMiLCJyZWRpcmVjdF90eXBlcyIsInR5cGVQYWdlcyIsInNldFR5cGVQYWdlcyIsImZpZWxkcyIsInNldEZpZWxkcyIsImhhc0luc2VydGVkIiwiZmluZEluZGV4IiwiZmllbGQiLCJ2YWx1ZSIsInByZXYiLCJmaWx0ZXIiLCJ0eXBlIiwiZmlsdGVyVHlwZXMiLCJsZW5ndGgiLCJpc0NoZWNrZWQiLCJuYW1lIiwiYXJnc19maWVsZHMiLCJBcnJheSIsImZyb20iLCJyZWRpcmVjdF9hcmdzIiwiQm9vbGVhbiIsImluY2x1ZGVzIiwib25DaGFuZ2VSZWRpcmVjdEFyZ3MiLCJmaWVsZF9uYW1lIiwiZmllbGRfaWQiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsInJlZGlyZWN0X3R5cGUiLCJyZWRpcmVjdF9wYWdlIiwicGFnZXMiLCJyZWRpcmVjdF91cmwiLCJpbnN0YW5jZUlkIiwibWFwIiwiaW5kZXgiLCJuZXdWYWwiLCJyZWRpcmVjdF9oYXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/form-actions/redirect.to.page/render.js\n");

/***/ })

}]);