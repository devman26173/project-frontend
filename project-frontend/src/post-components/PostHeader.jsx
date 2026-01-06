import React from 'react';

const PostHeader = ({ username, time }) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <div
        className="rounded-circle bg-light d-flex justify-content-center align-items-center"
        style={{ width: '40px', height: '40px', fontSize: '20px' }}
      >
        👤
      </div>

      <div className="ms-2 flex-grow-1">
        <div
          className="fw-bold"
          style={{ fontSize: '14px', color: '#333' }}
        >
          {username}
        </div>
        <div className="text-muted" style={{ fontSize: '12px' }}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
