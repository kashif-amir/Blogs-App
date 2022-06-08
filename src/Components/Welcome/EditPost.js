import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";

function EditPost(props) {
  const { title, body, id: postID } = props;

  const [postTitle, setPostTitle] = useState(title);
  const [postBody, setPostBody] = useState(body);
  const contextValue = useContext(UserContext);

  const allPosts = contextValue.posts;

  const savePost = () => {
    allPosts.forEach((post) => {
      if (post.id === postID) {
        post.title = postTitle;
        post.body = postBody;
      }
    });

    contextValue.setPosts([...allPosts]);
    props.closeModal();
  };

  console.log(contextValue.posts);
  return (
    <div className="create-post">
      <div>
        <div className="close-modal" onClick={props.closeModal}>
          x
        </div>
        <h1 className="Post-heading">Create Post</h1>
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
        <button className="create-button" onClick={savePost}>
          Create
        </button>
      </div>
    </div>
  );
}

export default EditPost;
