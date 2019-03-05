import { LOAD_DATA, SEARCH_CITY_HOUSE, SEARCH_PARTURITION_HOUSE } from '../constants/home'

const INITIAL_STATE = {
  data: null,
  house_city: null,
  parturition_city:null
}

export default function banner_search (state = INITIAL_STATE, action) {
  switch (action.type) {

    case LOAD_DATA:
    return{
      ...state,
      data:action.data
    }

    case SEARCH_CITY_HOUSE:
    return{
      ...state,
      house_city:action.city
    }

    case SEARCH_PARTURITION_HOUSE:
    return{
      ...state,
      parturition_city:action.city
    }

     default:
       return state
  }
}
