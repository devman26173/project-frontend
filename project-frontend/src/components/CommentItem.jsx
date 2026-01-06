import React, { useState } from 'react';
import { Heart, MessageCircle, ChevronDown, ChevronUp, Edit2, Trash2, X, Check } from 'lucide-react';
import CommentInput from './CommentInput';

const CommentItem = ({ comment, onUpdate, onDelete, onLike, onReplyAdd, depth = 0 }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleLike = () => {
    if (onLike) {
      onLike(comment.id);
    }
  };

  const handleReplySubmit = (text) => {
    const newReply = {
      id: Date.now(),
      id: Date.now(),
      username: 'ユーザー',
      text: text,
      time: '今',
      likes: 0,
      isLiked: false,
      replies: [],
      timestamp: Date.now(),
    };
    if (onReplyAdd) {
      onReplyAdd(comment.id, newReply);
    }
    setShowReplyInput(false);
  };

  const handleEdit = (newText) => {
    if (onUpdate) {
      onUpdate(comment.id, newText);
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('コメントを削除しますか？')) {
      if (onDelete) {
        onDelete(comment.id);
      }
    }
  };

  const getTotalRepliesCount = (comment) => {
    let count = comment.replies ? comment.replies.length : 0;
    if (comment.replies) {
      comment.replies.forEach(reply => {
        count += getTotalRepliesCount(reply);
      });
    }
    return count;
  };

  const replyCount = getTotalRepliesCount({ replies: comment.replies || [] });

  return (
    <div className={`comment-item ${depth > 0 ? 'reply-item-bg' : ''}`}>
      <div className="avatar">👤</div>
      <div className="comment-content">
        <div className="comment-header">
          <span className="comment-username">{comment.username}</span>
          <span className="comment-time">{comment.time}</span>
        </div>
        
        {isEditing ? (
          <div style={{ marginTop: '8px' }}>
            <CommentInput 
              onSubmit={handleEdit}
              onCancel={() => setIsEditing(false)}
              placeholder="コメントを編集します"
              initialValue={comment.text}
            />
          </div>
        ) : (
          <>
            <div className="comment-text">{comment.text}</div>
            
            <div className="comment-actions">
              <button 
                className={`comment-action-btn ${comment.isLiked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <Heart />
                <span>{comment.likes}</span>
              </button>
              
              {depth < 1 && (
                <button 
                  className="comment-action-btn"
                  onClick={() => setShowReplyInput(!showReplyInput)}
                >
                  <MessageCircle />
                  <span>コメント {replyCount > 0 && `(${replyCount})`}</span>
                </button>
              )}

              <button 
                className="comment-action-btn"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 />
                <span>編集</span>
              </button>

              <button 
                className="comment-action-btn delete-btn"
                onClick={handleDelete}
              >
                <Trash2 />
                <span>削除</span>
              </button>
            </div>
          </>
        )}

        {showReplyInput && !isEditing && (
          <div style={{ marginTop: '12px' }}>
            <CommentInput 
              onSubmit={handleReplySubmit}
              onCancel={() => setShowReplyInput(false)}
              placeholder="コメントする"
            />
          </div>
        )}

        {comment.replies && comment.replies.length > 0 && (
          <div className="reply-section">
            {comment.replies.map((reply) => (
              <CommentItem 
                key={reply.id} 
                comment={reply}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onLike={onLike}
                onReplyAdd={onReplyAdd}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;