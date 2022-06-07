import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import "./Post.css";

function CreatePost(props) {
  const [postTitle, setPostTitle] = useState();
  const [postBody, setPostBody] = useState();
  const contextValue = useContext(UserContext);

  const savepost = () => {
    contextValue.setPosts([
      ...contextValue.posts,
      {
        userId: "2",
        id: contextValue.posts.length + 1,
        title: postTitle,
        body: postBody,
        image:
          "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      },
    ]);
    props.closeModal();
  };

  return (
    <div className="create-post">
      <div>
        <div className="close-modal" onClick={props.closeModal}>
          x
        </div>
        <h1 className="Post-heading">Cretae Post</h1>
      </div>
      <div>
        <textarea
          className="input-post-title"
          placeholder="Post Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className="input-post-body"
          placeholder="Post Body"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
      </div>
      <div className="button-wrapper">
        <button className="create-button" onClick={savepost}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
