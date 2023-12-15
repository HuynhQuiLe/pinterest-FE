import { https } from "./config";

export const authSer = {
  login: (user) => https.post("auth/login", user),
  logout: () => https.post("auth/logout"),
  signup: (user) => https.post("auth/register", user),
  refreshToken: () => https.post("auth/refresh-token"),
};

export const userSer = {
  getUser: () => https.get("user/get-user"),
  updateUser: (user) => https.put("user/edit", user),
};

export const photoSer = {
  getAllPhotos: () => https.get("pinterest/photo/get-all-photos"),
  getSavedOrNot: (photo_id) =>
    https.get(`pinterest/photo/detail/save/${photo_id}`),
  getPhotoDetails: (photo_id) =>
    https.get(`pinterest/photo/detail/by-photo/${photo_id}`),
  addPhoto: (data) => https.post("pinterest/photo/add", data),
  savePhoto: (photo_id) =>
    https.post(`pinterest/photo/detail/save/${photo_id}`),
  getSavedPhotos: () =>
    https.get("pinterest/photo/detail/saved/get-list-by-user"),
  getCreatedPhotos: () =>
    https.get("pinterest/photo/detail/created/get-list-by-user"),
};

export const commentSer = {
  getAllCommentsByPhoto: (photo_id) =>
    https.get(`pinterest/photo/comment/by-photo/${photo_id}`),
  addComment: (photo_id, data) =>
    https.post(`pinterest/photo/comment/add/${photo_id}`, data),
};
