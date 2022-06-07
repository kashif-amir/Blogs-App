import React, { useContext } from "react";
import { UserContext } from "../../App";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./DisplayPost.css";
import RecentPost from "../RecentPost";
import Comment from "./Comment";

function DisplayPost() {
  const navigate = useNavigate();
  const contextValue = useContext(UserContext);

  return (
    <div>
      <BiArrowBack
        onClick={() => navigate("/welcome")}
        className="back-arrow"
      />
      <div className="post-page-container">
        <div className="post-page">
          <img
            src={contextValue.postPage.largeimage}
            alt="Current post image"
            className="show-post-img"
          />
          <div>
            <h3>{contextValue.postPage.title}</h3>
          </div>
          <div className="post-text">
            <p>{contextValue.postPage.body}</p>
            <p>
              Where can I get some? There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage
              of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. 5 paragraphs words bytes lists Start
              with 'Lorem ipsum dolor sit amet...'
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
          <div className="related-post">
            <h1 className="related-post-text">Related Post</h1>
            <div className="post-images">
              {contextValue.recentPost.map((posts, index) => {
                return (
                  <RecentPost
                    key={index}
                    id={posts.id}
                    smImg={posts.smimg}
                    title={posts.title}
                    body={posts.body}
                    lgImg={posts.lgimg}
                  />
                );
              })}
            </div>
          </div>
          <div className="comment-container">
            <h1 className="comments">Comments</h1>
            <div>
              <Comment postId={contextValue.postPage.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPost;
