import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ userName, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt={userName}
          src="/static/images/avatar/1.png"
        />
        <h3>{userName}</h3>
      </div>

      <img className="post_image" src={imageUrl} alt="My Posts" />
      {/* image */}

      <h4 className="post_text">
        <strong>{userName} </strong>
        {caption}
      </h4>
      {/* username + captions */}
    </div>
  );
}

export default Post;
