"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//图片
var star = "/assets/icon/star.svg";
var halfstar = "/assets/icon/star-half.svg";
var greystar = "/assets/icon/star-gray.svg";

var Rate = function (_BaseComponent) {
  _inherits(Rate, _BaseComponent);

  function Rate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rate.__proto__ || Object.getPrototypeOf(Rate)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["list", "rate"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rate, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Rate.prototype.__proto__ || Object.getPrototypeOf(Rate.prototype), "_constructor", this).call(this, props);
      this.state = {
        rate: this.props.rate,
        list: []
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      for (var rate_list = [], e = this.state.rate; e > 0;) {
        rate_list.push({
          id: rate_list.length,
          type: e >= 1 ? star : halfstar
        }), e -= 1;
      }for (; rate_list.length < 5;) {
        rate_list.push({
          id: rate_list.length,
          type: greystar
        });
      }this.setState({ list: rate_list });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _state = this.__state,
          list = _state.list,
          rate = _state.rate;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Rate;
}(_index.Component);

Rate.properties = {
  "rate": {
    "type": null,
    "value": null
  }
};
Rate.$$events = [];
exports.default = Rate;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Rate));