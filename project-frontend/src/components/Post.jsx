import React, { useState } from 'react';
import PostHeader from './PostHeader';
import PostActions from './PostActions';
import CommentSection from './CommentSection';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(() => {
    const getTotalCount = (comments) => {
      let count = comments.length;
      comments.forEach(comment => {
        if (comment.replies && comment.replies.length > 0) {
          count += getTotalCount(comment.replies);
        }
      });
      return count;
    };
    return getTotalCount(post.comments);
  });

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleCommentClick = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <div className="post">
      <PostHeader 
        username={post.username}
        time={post.time}
      />
      
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-text">{post.content}</p>
      </div>
      
      <PostActions 
        likes={likes}
        comments={commentCount}
        isLiked={isLiked}
        isCommentOpen={isCommentOpen}
        onLikeClick={handleLikeClick}
        onCommentClick={handleCommentClick}
      />
      
       <CommentSection 
        initialComments={post.comments}
        onCommentCountChange={setCommentCount}
        isOpen={isCommentOpen}
        onToggle={handleCommentClick}
      />
    </div>
  );
};

export default Post;