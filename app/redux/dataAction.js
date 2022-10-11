import {
  LOAD_PHOTOS,
  LOAD_ALBUMS,
  LOAD_USERS,
  UPLOAD_ALBUM,
  UPLOAD_PHOTOS,
} from "./constants";

export function loadPhotos(data) {
  return {
    type: LOAD_PHOTOS,
    payload: data,
  };
}

export function loadAlbums(data) {
  return {
    type: LOAD_ALBUMS,
    payload: data,
  };
}

export function loadUsers(data) {
  return {
    type: LOAD_USERS,
    payload: data,
  };
}

export function uploadAlbum(data) {
  return {
    type: UPLOAD_ALBUM,
    payload: data,
  };
}

export function uploadPhoto(data) {
  return {
    type: UPLOAD_PHOTOS,
    payload: data,
  };
}
