import React from 'react';

const PostDetail = ({ post, onBack }) => {
  return (
    <div className="min-vh-100 bg-white" style={{ maxWidth: '400px', margin: '0 auto', paddingBottom: '80px' }}>
      {/* 헤더 */}
      <header 
        className="d-flex align-items-center justify-content-between p-3 text-white position-sticky top-0" 
        style={{ backgroundColor: '#ff9800', zIndex: 10 }}
      >
        <span onClick={onBack} style={{ cursor: 'pointer', fontSize: '20px' }}>〈</span>
        <span className="fw-bold">グルメ掲示板</span>
        <span style={{ cursor: 'pointer', fontSize: '20px' }}>⋮</span>
      </header>

      {/* 내용 */}
      <div className="p-4">
        {/* 제목 */}
        <h1 className="fs-3 fw-bold mb-3 lh-sm">{post.title}</h1>
        
        {/* 별점 */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <span style={{ fontSize: '20px' }}>⭐</span>
          <span className="fs-5 fw-bold">{post.rating}</span>
        </div>

        {/* 이미지 */}
        <img 
          src={post.img} 
          alt="food" 
          className="w-100 rounded mb-3"
        />

        {/* 내용 */}
        <p className="text-dark mb-4" style={{ lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </p>

        {/* 메타 정보 */}
        <div className="d-flex align-items-center gap-3 text-muted border-top pt-3 mb-4" style={{ fontSize: '14px' }}>
          <span className="text-danger">👍 {post.likes}</span>
          <span className="text-primary">💬 {post.comments}</span>
          <span>{post.meta}</span>
        </div>

        
      </div>
    </div>
  );
};

export default PostDetail;