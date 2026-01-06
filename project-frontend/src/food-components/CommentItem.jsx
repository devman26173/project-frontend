import React, { useState } from "react";
import { Heart, MessageCircle, Edit2, Trash2 } from "lucide-react";
import CommentInput from "./CommentInput";

const CommentItem = ({
  comment,
  onUpdate,
  onDelete,
  onLike,
  onReplyAdd,
  depth = 0
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getTotalRepliesCount = (comment) => {
    let count = comment.replies ? comment.replies.length : 0;
    if (comment.replies) {
      comment.replies.forEach(reply => {
        count += getTotalRepliesCount(reply);
      });
    }
    return count;
  };

  const replyCount = getTotalRepliesCount(comment);

  return (
    <div className={`d-flex ${depth > 0 ? "ms-4" : ""} mb-3`}>
      <div className="flex-shrink-0">
        <div
          className="rounded-circle bg-light d-flex justify-content-center align-items-center"
          style={{ width: "32px", height: "32px", fontSize: "16px" }}
        >
          👤
        </div>
      </div>

      <div className="flex-grow-1 ms-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold small text-dark">
            {comment.username}
          </span>
          <span className="text-muted small">{comment.time}</span>
        </div>

        {!isEditing ? (
          <>
            <p className="mb-2 small text-secondary" style={{ lineHeight: 1.5 }}>
              {comment.text}
            </p>

            {/* 버튼 그룹 */}
            <div className="d-flex flex-wrap gap-2 mb-1">
              <button
                className={`btn btn-sm d-flex align-items-center gap-1 ${
                  comment.isLiked ? "text-danger" : "text-secondary"
                }`}
                onClick={() => onLike(comment.id)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "4px 8px",
                  fontSize: "12px"
                }}
              >
                <Heart
                  size={14}
                  className={comment.isLiked ? "text-danger" : "text-secondary"}
                />
                <span>{comment.likes}</span>
              </button>

              {depth < 1 && (
                <button
                  className="btn btn-sm text-secondary d-flex align-items-center gap-1"
                  onClick={() => setShowReplyInput(!showReplyInput)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "4px 8px",
                    fontSize: "12px"
                  }}
                >
                  <MessageCircle size={14} />
                  <span>
                    コメント {replyCount > 0 && `(${replyCount})`}
                  </span>
                </button>
              )}

              <button
                className="btn btn-sm text-secondary d-flex align-items-center gap-1"
                onClick={() => setIsEditing(true)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "4px 8px",
                  fontSize: "12px"
                }}
              >
                <Edit2 size={14} />
                <span>編集</span>
              </button>

              <button
                className="btn btn-sm text-secondary d-flex align-items-center gap-1"
                onClick={() => onDelete(comment.id)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "4px 8px",
                  fontSize: "12px"
                }}
              >
                <Trash2 size={14} />
                <span>削除</span>
              </button>
            </div>
          </>
        ) : (
          <div className="mt-2">
            <CommentInput
              onSubmit={(text) => {
                onUpdate(comment.id, text);
                setIsEditing(false);
              }}
              onCancel={() => setIsEditing(false)}
              initialValue={comment.text}
            />
          </div>
        )}

        {/* 답글 입력 */}
        {showReplyInput && !isEditing && (
          <div className="mt-2">
            <CommentInput
              onSubmit={(text) => {
                onReplyAdd(comment.id, {
                  id: Date.now(),
                  username: "ユーザー",
                  text,
                  time: "今",
                  likes: 0,
                  isLiked: false,
                  replies: [],
                  timestamp: Date.now()
                });
                setShowReplyInput(false);
              }}
              onCancel={() => setShowReplyInput(false)}
            />
          </div>
        )}

        {/* 중첩 답글 */}
        {(comment.replies || []).map((reply) => (
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
    </div>
  );
};

export default CommentItem;
