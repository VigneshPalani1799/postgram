import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>
      <Post
        userName="Vignesh_Palani"
        imageUrl="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
        caption="Day 1 learning with react"
      />
      <Post
        userName="Lekhi_Shetty"
        imageUrl="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
        caption="Day 1 learning with react"
      />
    </div>
  );
}

export default App;
