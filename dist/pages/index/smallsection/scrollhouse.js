"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

// style


var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _home = require("../../../actions/home.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//组件


var ScrollHouse = (_dec = (0, _index3.connect)(function (_ref) {
  var banner_search = _ref.banner_search;
  return {
    data: banner_search.data
  };
}, function (dispatch) {
  return {
    search_city_house: function search_city_house() {
      dispatch((0, _home.search_city_house)());
    },
    search_parturition_house: function search_parturition_house() {
      dispatch((0, _home.search_parturition_house)());
    }
  };
}), _dec(_class = function (_BaseComponent) {
  _inherits(ScrollHouse, _BaseComponent);

  function ScrollHouse() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollHouse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ScrollHouse.__proto__ || Object.getPrototypeOf(ScrollHouse)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["data", "type"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollHouse, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ScrollHouse.prototype.__proto__ || Object.getPrototypeOf(ScrollHouse.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          data = _props.data,
          type = _props.type;

      Object.assign(this.__state, {
        data: data,
        type: type
      });
      return this.__state;
    }
  }]);

  return ScrollHouse;
}(_index.Component)) || _class);
ScrollHouse.properties = {
  "data": {
    "type": null,
    "value": null
  },
  "type": {
    "type": null,
    "value": null
  }
};
ScrollHouse.$$events = [];
exports.default = ScrollHouse;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ScrollHouse));