import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

const CommentSection = ({ initialComments = [], onCommentCountChange, isOpen }) => {
  const [comments, setComments] = useState(initialComments);
  const [sortOrder, setSortOrder] = useState('latest'); // 'latest' or 'oldest'

  const getTotalCommentsCount = (commentsList) => {
    let count = commentsList.length;
    commentsList.forEach(comment => {
      if (comment.replies && comment.replies.length > 0) {
        count += getTotalCommentsCount(comment.replies);
      }
    });
    return count;
  };

  const handleCommentSubmit = (text) => {
    const newComment = {
      id: Date.now(),
      username: 'ユーザー',
      text: text,
      time: '今',
      likes: 0,
      isLiked: false,
      replies: [],
      timestamp: Date.now(),
    };
    const newComments = [newComment, ...comments];
    setComments(newComments);
    if (onCommentCountChange) {
      onCommentCountChange(getTotalCommentsCount(newComments));
    }
  };

  const updateCommentInList = (commentsList, commentId, updateFn) => {
    return commentsList.map(comment => {
      if (comment.id === commentId) {
        return updateFn(comment);
      }
      if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateCommentInList(comment.replies, commentId, updateFn)
        };
      }
      return comment;
    });
  };

  const handleCommentUpdate = (commentId, newText) => {
    setComments(updateCommentInList(comments, commentId, (comment) => ({
      ...comment,
      text: newText
    })));
  };

  const deleteCommentFromList = (commentsList, commentId) => {
    return commentsList.filter(comment => {
      if (comment.id === commentId) {
        return false;
      }
      if (comment.replies && comment.replies.length > 0) {
        comment.replies = deleteCommentFromList(comment.replies, commentId);
      }
      return true;
    });
  };

  const handleCommentDelete = (commentId) => {
    const newComments = deleteCommentFromList(comments, commentId);
    setComments(newComments);
    if (onCommentCountChange) {
      onCommentCountChange(getTotalCommentsCount(newComments));
    }
  };

  const handleCommentLike = (commentId) => {
    setComments(updateCommentInList(comments, commentId, (comment) => ({
      ...comment,
      isLiked: !comment.isLiked,
      likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
    })));
  };

  const handleReplyAdd = (parentId, newReply) => {
    const newComments = updateCommentInList(comments, parentId, (comment) => ({
      ...comment,
      replies: [...(comment.replies || []), newReply]
    }));
    setComments(newComments);
    if (onCommentCountChange) {
      onCommentCountChange(getTotalCommentsCount(newComments));
    }
  };

  const getSortedComments = () => {
    const sorted = [...comments];
    if (sortOrder === 'latest') {
      return sorted.sort((a, b) => (b.timestamp || b.id) - (a.timestamp || a.id));
    } else {
      return sorted.sort((a, b) => (a.timestamp || a.id) - (b.timestamp || b.id));
    }
  };

  return (
    <div className="comment-section">
      {isOpen && (
        <>
          <div className="comment-header-row">
            <span>▲</span>
            <div className="sort-buttons">
              <button 
                className={`sort-btn ${sortOrder === 'latest' ? 'active' : ''}`}
                onClick={() => setSortOrder('latest')}
              >
                최신순
              </button>
              <button 
                className={`sort-btn ${sortOrder === 'oldest' ? 'active' : ''}`}
                onClick={() => setSortOrder('oldest')}
              >
                시간순
              </button>
            </div>
          </div>
          <CommentInput onSubmit={handleCommentSubmit} />
          
          <div className="comment-list">
            {getSortedComments().map((comment) => (
              <CommentItem 
                key={comment.id} 
                comment={comment}
                onUpdate={handleCommentUpdate}
                onDelete={handleCommentDelete}
                onLike={handleCommentLike}
                onReplyAdd={handleReplyAdd}
                depth={0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};


export default CommentSection;