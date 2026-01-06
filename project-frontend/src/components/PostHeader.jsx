import React from 'react';

const PostHeader = ({ username, time }) => {
  return (
    <div className="post-header">
      <div className="avatar">👤</div>
      <div className="user-info">
        <div className="username">{username}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default PostHeader;