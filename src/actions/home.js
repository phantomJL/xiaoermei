import { city, bannerPic, recommand, listings, parturition } from '../assets/data/temp-data'
import { LOAD_DATA, SEARCH_CITY_HOUSE, SEARCH_PARTURITION_HOUSE } from '../constants/home'

const data = {city, bannerPic, recommand, listings, parturition}

export function loadData() {
  return dispatch => {
      dispatch({ type: LOAD_DATA, data })
  }
}

export const search_city_house = (city) => {
  return {
    type: SEARCH_CITY_HOUSE,
    city
  }
}
export const search_parturition_house = (city) => {
  return {
    type: SEARCH_PARTURITION_HOUSE,
    city
  }
}
