"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/fetch-events";
exports.ids = ["pages/api/fetch-events"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./pages/api/fetch-events.js":
/*!***********************************!*\
  !*** ./pages/api/fetch-events.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { location , radius  } = req.body;\n        try {\n            const prompt = `\r\n        У меня есть координаты пользователя: (${location.lat}, ${location.lng}).\r\n        Найди ближайшие события (концерты, выставки, встречи и т.д.) в радиусе ${radius} км.\r\n        Верни список событий в формате: [{\"lat\": координата широты, \"lng\": координата долготы, \"title\": \"Название события\"}].\r\n      `;\n            const response = await openai.completions.create({\n                model: \"text-davinci-003\",\n                prompt,\n                max_tokens: 100,\n                temperature: 0.7\n            });\n            const events = JSON.parse(response.data.choices[0].text.trim());\n            res.status(200).json({\n                events\n            });\n        } catch (error) {\n            console.error(\"Error fetching events:\", error);\n            res.status(500).json({\n                error: \"Failed to fetch events\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2gtZXZlbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLFNBQVMsSUFBSUQsNkNBQVNBLENBQUM7SUFDM0JFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUVlLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUVyQyxJQUFJO1lBQ0YsTUFBTUMsU0FBUyxDQUFDOzhDQUN3QixFQUFFSCxTQUFTSSxHQUFHLENBQUMsRUFBRSxFQUFFSixTQUFTSyxHQUFHLENBQUM7K0VBQ0MsRUFBRUosT0FBTzs7TUFFbEYsQ0FBQztZQUVELE1BQU1LLFdBQVcsTUFBTWYsT0FBT2dCLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO2dCQUMvQ0MsT0FBTztnQkFDUE47Z0JBQ0FPLFlBQVk7Z0JBQ1pDLGFBQWE7WUFDZjtZQUVBLE1BQU1DLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ1IsU0FBU1MsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNDLElBQUk7WUFDNURwQixJQUFJcUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVI7WUFBTztRQUNoQyxFQUFFLE9BQU9TLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDeEN2QixJQUFJcUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF5QjtRQUN6RDtJQUNGLE9BQU87UUFDTHZCLElBQUlxQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUI7SUFDckQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudHNwaGVyZS8uL3BhZ2VzL2FwaS9mZXRjaC1ldmVudHMuanM/ODA3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcGVuQUlBcGkgfSBmcm9tICdvcGVuYWknO1xyXG5cclxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaSh7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSwgLy8g0KPQsdC10LTQuNGB0YwsINGH0YLQviDQutC70Y7RhyDQtNC+0LHQsNCy0LvQtdC9INCyIC5lbnZcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBsb2NhdGlvbiwgcmFkaXVzIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm9tcHQgPSBgXHJcbiAgICAgICAg0KMg0LzQtdC90Y8g0LXRgdGC0Ywg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPOiAoJHtsb2NhdGlvbi5sYXR9LCAke2xvY2F0aW9uLmxuZ30pLlxyXG4gICAgICAgINCd0LDQudC00Lgg0LHQu9C40LbQsNC50YjQuNC1INGB0L7QsdGL0YLQuNGPICjQutC+0L3RhtC10YDRgtGLLCDQstGL0YHRgtCw0LLQutC4LCDQstGB0YLRgNC10YfQuCDQuCDRgi7QtC4pINCyINGA0LDQtNC40YPRgdC1ICR7cmFkaXVzfSDQutC8LlxyXG4gICAgICAgINCS0LXRgNC90Lgg0YHQv9C40YHQvtC6INGB0L7QsdGL0YLQuNC5INCyINGE0L7RgNC80LDRgtC1OiBbe1wibGF0XCI6INC60L7QvtGA0LTQuNC90LDRgtCwINGI0LjRgNC+0YLRiywgXCJsbmdcIjog0LrQvtC+0YDQtNC40L3QsNGC0LAg0LTQvtC70LPQvtGC0YssIFwidGl0bGVcIjogXCLQndCw0LfQstCw0L3QuNC1INGB0L7QsdGL0YLQuNGPXCJ9XS5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNvbXBsZXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgbW9kZWw6ICd0ZXh0LWRhdmluY2ktMDAzJyxcclxuICAgICAgICBwcm9tcHQsXHJcbiAgICAgICAgbWF4X3Rva2VuczogMTAwLFxyXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjcsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZXZlbnRzID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmNob2ljZXNbMF0udGV4dC50cmltKCkpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGV2ZW50cyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV2ZW50czonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggZXZlbnRzJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJPcGVuQUlBcGkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibG9jYXRpb24iLCJyYWRpdXMiLCJib2R5IiwicHJvbXB0IiwibGF0IiwibG5nIiwicmVzcG9uc2UiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwibWF4X3Rva2VucyIsInRlbXBlcmF0dXJlIiwiZXZlbnRzIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetch-events.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetch-events.js"));
module.exports = __webpack_exports__;

})();