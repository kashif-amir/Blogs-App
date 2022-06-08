import Signin from "./Components/SignIn/Signin";
import Signup from "./Components/SignUp/Signup";
import DisplayPost from "./Components/PostDetail/DisplayPost";
import Welcome from "./Components/Welcome/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [postPage, setPostPage] = useState({});
  const [recentPost, setRecentPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          users,
          setUsers,
          currentUser,
          setCurrentUser,
          postPage,
          setPostPage,
          recentPost,
          setRecentPost,
          posts,
          setPosts,
          images,
          setImages,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} exact />
            <Route path="/signup" element={<Signup />} exact />
            <Route path="/welcome" element={<Welcome />} exact />
            <Route path="/post/:id" element={<DisplayPost />} exact />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
