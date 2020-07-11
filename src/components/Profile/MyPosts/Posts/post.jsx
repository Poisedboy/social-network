import React from "react";
import s from "./post.module.css";
import ava from "./../../../Image/avatar.jpg";

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src={ava} alt='avatar profile' />
      {props.message}
      <div>
        <span>Like {props.likesCount} </span>
        <button>Remove Post</button>
      </div>
    </div>
  );
};

export default Post;
