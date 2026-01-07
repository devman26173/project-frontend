import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const PostActions = ({
  likes,
  comments,
  isLiked,
  onLikeClick,
  onCommentClick,
  isCommentOpen
}) => {
  return (
    <div className="d-flex gap-3 border-top pt-2">
      {/* 좋아요 */}
      <button
        className={`btn btn-sm d-flex align-items-center gap-1 ${
          isLiked ? 'text-danger' : 'text-secondary'
        }`}
        onClick={onLikeClick}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '13px'
        }}
      >
        <Heart 
        size={18}
        fill={isLiked ? 'currentColor' : 'none'}
        stroke="currentColor"
        />
        <span>いいね！({likes})</span>
      </button>

      {/* 댓글 */}
      <button
        className="btn btn-sm text-secondary d-flex align-items-center gap-1"
        onClick={onCommentClick}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '13px'
        }}
      >
        <MessageCircle size={18} />
        <span>コメント ({comments})</span>
      </button>
    </div>
  );
};

export default PostActions;
