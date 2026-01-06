import React, { useState } from 'react';
import PostHeader from './food-components/PostHeader';
import PostActions from './food-components/PostActions';
import CommentSection from './food-components/CommentSection';

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
    <div
      className="p-3 mb-4"
      style={{
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <PostHeader username={post.username} time={post.time} />

      <div className="mb-3">
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#333' }}>
          {post.title}
        </h3>
        <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
          {post.content}
        </p>
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
      />
    </div>
  );
};

export default Post;
