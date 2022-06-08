import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "./Post.css";
import EditPost from "./EditPost";

function Post(props) {
  const { id, title, body, largeimage } = props;
  const contextvalue = useContext(UserContext);
  const navigate = useNavigate();

  const showpost = () => {
    contextvalue.setPostPage({ id, title, body, largeimage });
    props.postImage();
    navigate(`/post/${props.id}`);
  };

  const [editModal, setEditModal] = useState(false);
  const openModal = () => {
    setEditModal(true);
  };
  const closeModal = () => {
    setEditModal(false);
  };

  return (
    <div>
      <div className="post-container">
        <div className="post-column1">
          <img src={props.image} alt="post image" />
        </div>
        <div className="post-column2">
          <div className="wrapper-delete-icon">
            <div className="icon-wrapper">
              <MdDelete
                className="delete-icon"
                onClick={() => props.deleteitem(props.id)}
              />
              <FaRegEdit className="edit-icon" onClick={openModal} />
            </div>
            <br />
            <br />
            <button className="read-more-button" onClick={showpost}>
              Read More
            </button>
          </div>
          {editModal && (
            <div className="create-post-container">
              <EditPost closeModal={closeModal} {...props} />
            </div>
          )}
          <div className="post-text-container">
            <div className="date">Tuesday May 31 2022</div>
            <div>{props.id}</div>
            <h4 className="post-title">{props.title}</h4>
            <p className="post-body">{props.body}</p>
            <button className="read-more-button" onClick={showpost}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
