import { produce } from "immer";
import {
  ADD_POSTS,
  NEXT_PAGE,
  SET_ERROR,
  SET_LOADING,
  SET_HASMORE_FALSE
} from "./type";
const INITIAL_STATE = {
  page: 1,
  posts: [],
  loading: false,
  error: null,
  hasMore: true,
  postsId: new Set()
};

export default function postsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case NEXT_PAGE: {
      return produce(state, (draft) => {
        draft.page = draft.page + 1;
      });
    }
    case ADD_POSTS: {
      return produce(state, (draft) => {
        draft.posts.push(...payload.posts);
      });
    }
    case SET_LOADING: {
      return produce(state, (draft) => {
        draft.loading = payload.loading;
      });
    }
    case SET_ERROR: {
      return produce(state, (draft) => {
        draft.loading = payload.error;
      });
    }
    case SET_HASMORE_FALSE: {
      return produce(state, (draft) => {
        draft.hasMore = false;
      });
    }
    default: {
      return state;
    }
  }
}
