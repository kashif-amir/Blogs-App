import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function RecentPost(props) {
  const { id, title, body, lgImg } = props;

  const contextValue = useContext(UserContext);
  const navigate = useNavigate();

  const displayPost = () => {
    contextValue.setPostPage({ id, title, body, largeimage: lgImg });
    navigate(`/post/${props.id}`);
  };

  return (
    <div>
      <div className="display-post-container">
        <img src={props.smImg} alt="show-psot-image" className="show-img" />
        <div className="post-image-text">
          <h3 className="post-title-text">{props.title}</h3>
          <p className="post-body-text">{props.body}</p>
          <button className="related-read-more-button" onClick={displayPost}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
