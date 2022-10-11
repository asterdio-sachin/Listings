import {
  LOAD_PHOTOS,
  LOAD_ALBUMS,
  LOAD_USERS,
  UPLOAD_ALBUM,
  UPLOAD_PHOTOS,
} from "./constants";

const initialState = {
  photos: [],
  albums: [],
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case LOAD_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UPLOAD_ALBUM:
      return {
        ...state,
        albums: [action.payload, ...state.albums],
      };
    case UPLOAD_PHOTOS:
      return {
        ...state,
        photos: [action.payload, ...state.photos],
      };
    default:
      return state;
  }
};
