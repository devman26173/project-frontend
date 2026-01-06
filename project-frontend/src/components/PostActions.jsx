import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const PostActions = ({ likes, comments, isLiked, isCommentOpen, onLikeClick, onCommentClick }) => {
  return (
    <div className="post-actions">
      <button 
        className={`action-btn ${isLiked ? 'active' : ''}`}
        onClick={onLikeClick}
      >
        <Heart />
        <span>いいね！({likes})</span>
      </button>
      
      <button 
        className="action-btn"
        onClick={onCommentClick}
      >
        <MessageCircle />
        <span>コメント ({comments})</span>
      </button>
    </div>
  );
};

export default PostActions;