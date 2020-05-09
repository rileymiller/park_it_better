import {SAVING_RESIDENT, SAVED_RESIDENT, RECEIVE_RESIDENT} from '../actions/resident';

const initialState = {
  saving: false,
  fields: {
    "property-name": "",
    "first-name-of-resident": "",
    "last-name-of-resident": "",
    "resident-address": "",
    "resident-apartment": "",
    "resident-city": "",
    "resident-state": "",
    "resident-zip": "",
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVING_RESIDENT:
      return {
        ...state,
        saving: true,
      };

    case SAVED_RESIDENT:
      return {
        ...state,
        saving: false,
      };

    case RECEIVE_RESIDENT:
      const {fields} = action.payload;
      return {
        ...state,
        fields,
      };

    default:
      return state;
  }
}
