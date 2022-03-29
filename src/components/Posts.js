import { forwardRef, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addPosts,
  nextPage,
  setError,
  setHasMore,
  setLoading
} from "../store/actions";

const Post = forwardRef(
  ({ liked, name, text, title, pfp_url, img_url, likesCount }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_head">
          <div className="post_head-pfp">
            <img src={pfp_url} className="img-fluid" alt="profile pic" />
          </div>
          <div className="post_head-name">{name}</div>
          <button className="post_head-opt btn">•••</button>
          <div className="post_head-title">{title}</div>
          <div className="post_head-time">10m ago</div>
        </div>
        <div className="post_text">{text}</div>
        <div className="post_img">
          <img src={img_url} alt="Post" className="img-fluid" />
        </div>
        <div>
          <button className={`btn ${liked ? "btn-danger" : ""}`}>
            {likesCount}
            {liked ? " Unlike" : " Like"}
          </button>
          <button className="btn">Comment</button>
          <button className="btn">Share</button>
        </div>
      </div>
    );
  }
);

export default function Posts() {
  const { page, posts, loading, hasMore } = useSelector((s) => s);
  const dispatch = useDispatch();

  const API = `https://api.unsplash.com/photos?page=${page}&&client_id=4b93d1ba487be4e97a48a5872cfa8809e43a1c00a958f3d2da777e25f5aab6a2`;
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entriesArray) => {
        if (entriesArray[0].isIntersecting && hasMore) {
          dispatch(nextPage());
        }
      });
      if (node && observer.current) {
        observer.current.observe(node);
        console.log(node);
      }
    },
    [loading, hasMore, dispatch]
  );

  useEffect(() => {
    dispatch(setLoading(true));
    fetch(API)
      .then((res) => res.json())
      .then((posts) => {
        if (posts.length === 0) {
          dispatch(setHasMore());
          return;
        }

        dispatch(addPosts(posts));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError("Some error occurred"));
      })
      .finally((_) => dispatch(setLoading(false)));
  }, [API, dispatch]);

  return (
    <div className="posts">
      {posts.map((post, idx) => {
        if (idx + 1 === posts.length) {
          return (
            <Post
              key={post.id}
              liked={post.liked_by_user}
              name={post.user.name}
              text={post.user.bio}
              title={post.created_at}
              pfp_url={post.user.profile_image.medium}
              img_url={post.urls.regular}
              likesCount={post.likes}
              ref={lastElementRef}
            />
          );
        }
        return (
          <Post
            key={post.id}
            liked={post.liked_by_user}
            name={post.user.name}
            text={post.user.bio}
            title={post.created_at}
            pfp_url={post.user.profile_image.medium}
            img_url={post.urls.regular}
            likesCount={post.likes}
          />
        );
      })}
    </div>
  );
}
