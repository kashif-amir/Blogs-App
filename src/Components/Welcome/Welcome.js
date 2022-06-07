import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import Post from "./Post";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import CreatePost from "./CreatePost";

const WelcomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const contextValue = useContext(UserContext);

  const postImage = () => {
    const recentPost = [];
    contextValue.posts.slice(0, 3).forEach((post, index) => {
      recentPost.push({
        ...post,
        smimg: contextValue.images[index]?.src.medium,
        lgimg: contextValue.images[index]?.src.large,
      });
    });
    contextValue.setRecentPost(recentPost);
  };
  console.log(contextValue.recentPost);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then(function (response) {
      contextValue.setPosts(response.data.slice(0, 15));
    });
    axios({
      method: "get",
      headers: {
        Authorization:
          "563492ad6f91700001000001ebd32398cc694c93ad2427105681edca",
      },
      url: "https://api.pexels.com/v1/search?query=gym",
    }).then(function (response) {
      contextValue.setImages(response.data.photos);
    });
  }, []);

  const deleteItem = (id) => {
    const update = contextValue.posts.filter(({ id: postID }, index) => {
      console.log(id);
      return id !== postID;
    });
    console.log(update);
    contextValue.setPosts(update);
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    contextValue.setCurrentUser({});
    navigate("/");
  };

  return (
    <div className="welcome-wrpper">
      <button className="signout-btn" onClick={handleSignOut}>
        SIGN OUT
      </button>
      <h1>Welcome Page</h1>
      <div className="posts">
        {contextValue.posts?.map((post, index) => {
          return (
            <Post
              key={index}
              title={post.title}
              id={post.id}
              body={post.body}
              image={contextValue.images[index]?.src.medium || post.image}
              largeimage={contextValue.images[index]?.src.large || post.image}
              postImage={postImage}
              deleteitem={deleteItem}
            />
          );
        })}
      </div>
      <div className="div-pencil-icon">
        <BsFillPencilFill className="pencil-icon" onClick={openModal} />
      </div>
      {showModal && (
        <div className="create-post-container">
          <CreatePost closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
