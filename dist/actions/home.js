"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search_parturition_house = exports.search_city_house = undefined;
exports.loadData = loadData;

var _tempData = require("../assets/data/temp-data.js");

var _home = require("../constants/home.js");

var data = { city: _tempData.city, bannerPic: _tempData.bannerPic, recommand: _tempData.recommand, listings: _tempData.listings, parturition: _tempData.parturition };

function loadData() {
  return function (dispatch) {
    dispatch({ type: _home.LOAD_DATA, data: data });
  };
}

var search_city_house = exports.search_city_house = function search_city_house(city) {
  return {
    type: _home.SEARCH_CITY_HOUSE,
    city: city
  };
};
var search_parturition_house = exports.search_parturition_house = function search_parturition_house(city) {
  return {
    type: _home.SEARCH_PARTURITION_HOUSE,
    city: city
  };
};