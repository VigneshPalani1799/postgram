import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      userName: "Vignesh_BG",
      caption: "Day 1 learning react",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    },
    {
      userName: "Lekhi_Shetty",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      caption: "My Cutie Pie",
    },
  ]);

  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>

      {posts.map((post) => {
        return (
          <Post
            userName={post.userName}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
