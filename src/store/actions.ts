import {
  ADD_POSTS,
  NEXT_PAGE,
  SET_ERROR,
  SET_HASMORE_FALSE,
  SET_LOADING
} from "./type";

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
    payload: {}
  };
};

export const addPosts = (posts) => ({
  type: ADD_POSTS,
  payload: { posts }
});

export const setLoading = (loading) => {
  console.log(loading ? "loading" : "loaded");
  return { type: SET_LOADING, payload: { loading } };
};

export const setError = (error) => ({
  type: SET_ERROR,
  payload: { error }
});

export const setHasMore = () => {
  console.log("no more posts");
  return {
    type: SET_HASMORE_FALSE,
    payload: {}
  };
};
