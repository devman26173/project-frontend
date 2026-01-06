import React, { useState } from "react";

const CommentInput = ({
  onSubmit,
  onCancel,
  placeholder = "コメントする",
  initialValue = ""
}) => {
  const [text, setText] = useState(initialValue);

  return (
    <div className="d-flex gap-2 align-items-start mb-2">
      <div
        className="rounded-circle bg-light d-flex justify-content-center align-items-center"
        style={{ width: "32px", height: "32px", fontSize: "16px" }}
      >
        👤
      </div>

      <div className="flex-grow-1">
        <textarea
          className="form-control form-control-sm"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="2"
          style={{
            borderRadius: "8px",
            borderColor: "#e0e0e0",
            fontSize: "14px"
          }}
        />

        <div className="d-flex gap-2 mt-2">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              if (text.trim()) {
                onSubmit(text);
                setText("");
              }
            }}
            disabled={!text.trim()}
          >
            {initialValue ? "編集" : "投稿"}
          </button>

          {onCancel && (
            <button
              className="btn btn-sm btn-secondary"
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
