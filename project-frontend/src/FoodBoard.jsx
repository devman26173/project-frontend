import React, { useState } from 'react';
import './FoodBoard.css';

const FoodBoard = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'write'
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('東京');
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const regions = ['東京', '大阪', '京都', '福岡', '北海道', '沖縄', '名古屋', '神戸'];
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "六本木で本格アメリカンBBQ🍖",
      content: "お肉がホロホロでボリューム満点！スモーキーな香りが食欲をそそります。大人数での飲み会にも最高✨",
      meta: "| 12:24 | 作成者",
      img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400",
      rating: 5
    },
    {
      id: 2,
      title: "恵比寿の絶品パエリアランチ🇪🇸",
      content: "本格的なスペイン料理が楽しめるお店。魚介の旨味が凝縮されたパエリアは絶対に食べてほしい一品です！",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
      rating: 4
    },
    {
      id: 3,
      title: "中目黒のお洒落な薪窯ピザ🍕",
      content: "生地がモチモチで香ばしい！本格的なナポリピザが楽しめます。デートや女子会にもおすすめの雰囲気。",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
      rating: 3
    },
    {
      id: 4,
      title: "表参道で見つけたヘルシーポケ丼🥗",
      content: "新鮮なマグロとアボカドがたっぷり！トッピングも選べて、ダイエット中やランチにぴったりなポケボウルです。",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      rating: 5
    }
  ]);
  

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
    rating: 0 
  });

  const StarRating = ({ rating, onRate, readOnly = false }) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => !readOnly && onRate(star)}
            style={{
              cursor: readOnly ? 'default' : 'pointer',
              fontSize: '20px',
              color: star <= rating ? '#FFD700' : '#ddd'
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };


  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

   const handleBack = () => {
    if (currentView === 'write') {
      setCurrentView('list');
    } else {
      alert('이전 페이지로 돌아갑니다');
    }
  };

  const handleWritePost = () => {
  if (!newPost.title.trim() || !newPost.content.trim()) {
    alert('제목과 내용을 입력해주세요');
    return;
  }

  const post = {
    id: posts.length + 1,
    title: newPost.title,
    content: newPost.content,
    img: newPost.imageUrl || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    meta: new Date().toLocaleString('ja-JP', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) + " | 작성자",
    likes: 0,
    comments: 0,
    rating: newPost.rating  // 추가
  };

  setPosts([post, ...posts]);
  setNewPost({ title: '', content: '', imageUrl: '', rating: 0 });  // rating 0으로 초기화
  setCurrentView('list');
};

  // 글쓰기 화면
if (currentView === 'write') {
  return (
    <div className="write-container">
      <header className="write-header">
        <span onClick={handleBack} style={{cursor: 'pointer'}}>〈</span>
        <span>글쓰기</span>
        <button onClick={handleWritePost}>완료</button>
      </header>

      <div className="write-form">
        <input
          type="text"
          className="write-input"
          placeholder="제목을 입력하세요"
          value={newPost.title}
          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
        />

          {/* 별점 추가 */}
        <div style={{
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '12px',
          border: '1px solid #ddd'
        }}>
          <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>
            별점을 선택하세요
          </div>
          <StarRating 
            rating={newPost.rating} 
            onRate={(star) => setNewPost({...newPost, rating: star})}
          />
        </div>

        <textarea
          className="write-textarea"
          placeholder="내용을 입력하세요"
          value={newPost.content}
          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
        />
        
        <input
          type="text"
          className="write-input"
          placeholder="이미지 URL (선택사항)"
          value={newPost.imageUrl}
          onChange={(e) => setNewPost({...newPost, imageUrl: e.target.value})}
        />
      </div>
    </div>
  );
}


  return (
  <div className="board-container">
    {/* 상단 헤더 */}
    <header className="board-header">
      <span onClick={handleBack} style={{cursor: 'pointer'}}>〈</span>
      <div className="header-title-box">
        <span className="header-main-title">グルメ掲示板</span>
        <span 
          className="header-sub-title"
          onClick={() => setRegionMenuOpen(!regionMenuOpen)}
          style={{cursor: 'pointer'}}
        >
          {selectedRegion} ▼
        </span>
        
        {/* 지역 선택 드롭다운 */}
        {regionMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            padding: '8px 0',
            minWidth: '120px',
            zIndex: 1000
          }}>
            {regions.map(region => (
              <div
                key={region}
                onClick={() => {
                  setSelectedRegion(region);
                  setRegionMenuOpen(false);
                }}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  backgroundColor: selectedRegion === region ? '#e3f2fd' : 'white',
                  color: selectedRegion === region ? '#1976d2' : '#333',
                  fontWeight: selectedRegion === region ? 'bold' : 'normal'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = selectedRegion === region ? '#e3f2fd' : 'white'}
              >
                {region}
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{display: 'flex', gap: '15px'}}>
  <span onClick={() => setSearchOpen(!searchOpen)} style={{cursor: 'pointer'}}>🔍</span>
  <span onClick={() => setMenuOpen(!menuOpen)} style={{cursor: 'pointer', position: 'relative'}}>
    ⋮
    
    {/* 메뉴 드롭다운 */}
    {menuOpen && (
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '0',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        minWidth: '150px',
        zIndex: 1000
      }}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            alert('의견을 보내주셔서 감사합니다!');
            setMenuOpen(false);
          }}
          style={{
            padding: '12px 16px',
            cursor: 'pointer',
            borderBottom: '1px solid #eee'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
        >
          📝 의견 보내기
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            alert('설정 페이지');
            setMenuOpen(false);
          }}
          style={{
            padding: '12px 16px',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
        >
          ⚙️ 설정
         </div>
        </div>
       )}
      </span>
      </div>
    </header>

      {/* 검색창 */}
      {searchOpen && (
      <div style={{padding: '15px', backgroundColor: 'white'}}>
      <input
      type="text"
      placeholder="검색어를 입력하세요"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px'}}
    />
  </div>
)}  

      {/* 공지사항 */}
      <div className="notice-section">
        <div className="notice-bar">
          <span>📢</span>
          <span>グルメ掲示板ご利用方法とルール</span>
        </div>
      </div>

      {/* 리스트 */}
      <div className="post-list">
  {filteredPosts.map(post => (
    <div key={post.id} className="post-item">
      <div className="post-content-area">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-summary">{post.content}</p>
        <div className="post-meta">
          <span style={{color: '#FFD700', marginRight: '8px'}}>⭐ {post.rating}</span>
          <span style={{color: '#ff4d4d'}}>👍 {post.likes} 💬 {post.comments} </span> 
          {post.meta}
        </div>
      </div>
      <img src={post.img} alt="food" className="post-image" />
    </div>
  ))}
</div>

      {/* 플로팅 버튼 */}
      <div className="write-button-container">
        <button className="write-button" 
        onClick={() => setCurrentView('write')}
  >投稿する ✏️</button>
      </div>
    </div>
  );
};

export default FoodBoard;