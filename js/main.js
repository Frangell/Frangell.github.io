/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  // create basic vars.
  var $amount = document.querySelector("#amount");
  var $from = document.querySelector("#trade__from");
  var $to = document.querySelector("#trade__to");
  var $output = document.querySelector('#output');
  var $list = {
    from: document.querySelector('#from'),
    to: document.querySelector('#to')
  }; // events

  $amount.addEventListener('keydown', update);
  $from.addEventListener('keydown', update);
  $to.addEventListener('keydown', update);
  var url = "https://script.google.com/macros/s/AKfycbyPlzCORaXVXcqNEvdhk35MY9ZaqPbDXiskv4EJZH0RkpJxjCI/exec";
  var fetchPromise = fetch(url);
  var data = null;
  fetchPromise.then(function (response) {
    response.json().then(function (result) {
      updateData(result.result);
      data = result.result;
    });
  });
  fetchPromise.catch(function (msg) {
    //alert( "Возникла непредвиденная ошибка, попробуйте перезагрузить страницу." );
    console.error(msg);
  }); // update data

  function updateData(data) {
    var options = '';
    data.forEach(function (item) {
      options += template(item);
    });
    $list.from.innerHTML = options;
    $list.to.innerHTML = options;
  }

  function template(item) {
    return "\n            <option value=\"".concat(item[0], "\">").concat(item[1], "</option>\n        ");
  }

  function update() {
    var _this = this;

    if (data && this !== $amount) {
      var index = _toConsumableArray(data).findIndex(function (item) {
        return item[0] === _this.value;
      });

      this.setAttribute('data-index', index);
    }

    if ($amount.value < 0) {
      $output.innerHTML = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432.";
    } else if ($amount.value !== '' && $from.value !== '' && $to.value !== '' && data) {
      var fromIndexPointsValue = data[$from.getAttribute('data-index')][1];
      var toIndexPointsValue = data[$to.getAttribute('data-index')][1];
      var amountValue = $amount.value;
      var output = Math.floor(fromIndexPointsValue * amountValue / toIndexPointsValue);

      if (fromIndexPointsValue === '' && toIndexPointsValue === '') {
        $output.innerHTML = "\u041E\u0431\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u044B \u043A \u043F\u0440\u043E\u0434\u0430\u0436\u0435";
      } else if (fromIndexPointsValue === '') {
        $output.innerHTML = "\u041F\u0435\u0440\u0432\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D \u043A \u043F\u0440\u043E\u0434\u0430\u0436\u0435";
      } else if (toIndexPointsValue === '') {
        $output.innerHTML = "\u0412\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D \u043A \u043F\u0440\u043E\u0434\u0430\u0436\u0435";
      } else if (fromIndexPointsValue === '' || toIndexPointsValue === '') {
        $output.innerHTML = "\u0423\u043F\u0441, \u0443 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C/\u043F\u0440\u043E\u0434\u0430\u0442\u044C \u043D\u0435\u0442 \u0446\u0435\u043D\u044B. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439.";
      } else if (output === 0) {
        $output.innerHTML = "\u0423 \u0432\u0430\u0441 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u043E\u0431\u043C\u0435\u043D\u0430. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435.";
      } else if (isNaN(output)) {
        $output.innerHTML = 'Произошла ошибка, пожалуйста перезагрузите страницу.';
      } else {
        $output.innerHTML = "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: &nbsp; <span class=\"output__value\">".concat(output, "</span>");
      }
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map