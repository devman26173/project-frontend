import React, { useState } from 'react';
import { Heart, MessageCircle, ChevronDown, ChevronUp, Edit2, Trash2, X, Check } from 'lucide-react';

const CommentInput = ({ onSubmit, onCancel, placeholder = "コメントする", initialValue = '' }) => {
  const [text, setText] = useState(initialValue);

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <div className="comment-input-container">
      <div className="avatar">👤</div>
      <div className="comment-input-wrapper">
        <textarea
          className="comment-input"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="3"
        />
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <button 
            className="comment-submit"
            onClick={handleSubmit}
            disabled={!text.trim()}
          >
            {initialValue ? '編集' : '投稿'}
          </button>
          {onCancel && (
            <button 
              className="comment-submit comment-cancel-btn"
              onClick={onCancel}
            >
              キャンセル
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentInput;