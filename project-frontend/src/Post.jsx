import React, { useState, useEffect } from 'react';
import axios from 'axios';
// 경로 수정: ./PostHeader → ./post-components/PostHeader
import PostHeader from './post-components/PostHeader';
import PostActions from './post-components/PostActions';
import CommentSection from './post-components/CommentSection';

const Post = () => {
  // 서버에서 가져온 게시글들을 저장할 state
  const [posts, setPosts] = useState([]);
  // 로딩 상태 관리
  const [loading, setLoading] = useState(true);
  // 에러 상태 관리
  const [error, setError] = useState(null);

  // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
  useEffect(() => {
    // 비동기 함수 정의
    const fetchPosts = async () => {
      try {
        // axios로 GET 요청 보내기
        const response = await axios.get('http://localhost:8080/posts');
        
        // 가져온 데이터를 state에 저장
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        // 에러 발생시 에러 메시지 저장
        console.error('데이터 가져오기 실패:', err);
        setError('게시글을 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    // 함수 실행
    fetchPosts();
  }, []); // 빈 배열 = 컴포넌트가 처음 렌더링될 때만 실행

  // 로딩 중일 때 보여줄 화면
  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  // 에러 발생시 보여줄 화면
  if (error) {
    return <div className="error">{error}</div>;
  }

  // 게시글들을 렌더링
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

// 개별 게시글 컴포넌트 (기존 로직 유지)
const PostItem = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(() => {
    const getTotalCount = (comments) => {
      let count = comments.length;
      comments.forEach(comment => {
        if (comment.replies && comment.replies.length > 0) {
          count += getTotalCount(comment.replies);
        }
      });
      return count;
    };
    return getTotalCount(post.comments || []);
  });

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleCommentClick = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <div className="post">
      <PostHeader 
        username={post.username}
        time={post.time}
      />
      
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-text">{post.content}</p>
      </div>
      
      <PostActions 
        likes={likes}
        comments={commentCount}
        isLiked={isLiked}
        isCommentOpen={isCommentOpen}
        onLikeClick={handleLikeClick}
        onCommentClick={handleCommentClick}
      />
      
      <CommentSection 
        initialComments={post.comments || []}
        onCommentCountChange={setCommentCount}
        isOpen={isCommentOpen}
        onToggle={handleCommentClick}
      />
    </div>
  );
};

export default Post;