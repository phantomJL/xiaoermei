"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = banner_search;

var _home = require("../constants/home.js");

var INITIAL_STATE = {
  data: null,
  house_city: null,
  parturition_city: null
};

function banner_search() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {

    case _home.LOAD_DATA:
      return _extends({}, state, {
        data: action.data
      });

    case _home.SEARCH_CITY_HOUSE:
      return _extends({}, state, {
        house_city: action.city
      });

    case _home.SEARCH_PARTURITION_HOUSE:
      return _extends({}, state, {
        parturition_city: action.city
      });

    default:
      return state;
  }
}