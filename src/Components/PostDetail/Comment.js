import axios from "axios";
import React, { useEffect, useState } from "react";

function Comment({ postId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => {
        setComments(res.data);
      });
  }, []);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div>
            <div className="commet-email-wraper">
              <div className="email-title">{comment.email?.slice(0, 1)}</div>
              <h3 className="comment-person-name">Deon Hunter</h3>
              <div className="comment-person-email">{comment.email}</div>
            </div>
            <div className="comment-person-body">{comment.body}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
