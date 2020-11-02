import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/*header-> avatar + username  */}

      <img
        className="post_image"
        src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
      />
      {/* image */}

      <h4 className="post_text">
        <strong>Vignesh_Palani: </strong>Day 1 learning with react
      </h4>
      {/* username + captions */}
    </div>
  );
}

export default Post;
