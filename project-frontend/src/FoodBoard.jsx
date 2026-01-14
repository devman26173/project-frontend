import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodBoard.css';
import PostDetail from './PostDetail';
import WritePost from './WritePost';
import FeedbackPage from './FeedbackPage';
import NoticePage from './NoticePage';

const FoodBoard = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'write', 'detail', 'feedback', 'notice'
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('すべて');
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // 추가!

  const [regionData, setRegionData] = useState({
    'すべて': [],
    '北海道・東北': ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
    '関東': ['東京都', '神奈川県', '千葉県', '埼玉県', '茨城県', '栃木県', '群馬県'],
    '中部': ['愛知県', '静岡県', '岐阜県', '三重県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県'],
    '近畿': ['大阪府', '兵庫県', '京都府', '滋賀県', '奈良県', '和歌山県'],
    '中国・四国': ['鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県'],
    '九州・沖縄': ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県']
  });

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/board');

        if (response.data && response.data.regionData) {
          setRegionData(response.data.regionData);
        }
      } catch (error) {
        console.error('regionData 가져오기 실패:', error);
      }
    };

    fetchRegionData();
  }, []);

  const [tempMainRegion, setTempMainRegion] = useState('すべて');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "六本木で本格アメリカンBBQ🍖",
      content: "お肉がホロホロでボリューム満点！スモーキーな香りが食欲をそそります。大人数での飲み会にも最高✨",
      meta: "| 12:24 | 作成者",
      img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400",
      rating: 5,
      region: '東京都'
    },
    {
      id: 2,
      title: "恵比寿の絶品パエリアランチ🇪🇸",
      content: "本格的なスペイン料理が楽しめるお店。魚介の旨味が凝縮されたパエリアは絶対に食べてほしい一品です！",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
      rating: 4,
      region: '東京都'
    },
    {
      id: 3,
      title: "中目黒のお洒落な薪窯ピザ🍕",
      content: "生地がモチモチで香ばしい！本格的なナポリピザが楽しめます。デートや女子会にもおすすめの雰囲気。",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
      rating: 3,
      region: '東京都'
    },
    {
      id: 4,
      title: "梅田で見つけたヘルシーポケ丼🥗",
      content: "新鮮なマグロとアボカドがたっぷり！トッピングも選べて、ダイエット中やランチにぴったりなポケボウルです。",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      rating: 5,
      region: '大阪府'
    }
  ]);


  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
    rating: 0,
    region: ''
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
    (selectedRegion === 'すべて' || post.region === selectedRegion) && (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleBack = () => {
    if (currentView === 'write' || currentView === 'detail' || currentView === 'feedback' || currentView === 'notice') {
      setCurrentView('list');
      setSelectedPost(null);
    } else {
      alert('前のページに戻ります');
    }
  };

  const handleWritePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('タイトルと内容を入力してください');
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
      rating: newPost.rating,
      region: newPost.region // 추가
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', imageUrl: '', rating: 0, region: '' });  // rating 0으로 초기화
    setCurrentView('list');
  };


  // 의견 보내기 화면
  if (currentView === 'feedback') {
    return <FeedbackPage onBack={handleBack} />;
  }

  // 공지사항 화면
  if (currentView === 'notice') {
    return <NoticePage onBack={handleBack} />;
  }


  // 게시글 상세 화면
  if (currentView === 'detail' && selectedPost) {
    return <PostDetail post={selectedPost} onBack={handleBack} />;
  }


  // 글쓰기 화면
  if (currentView === 'write') {
    return (
      <WritePost
        newPost={newPost}
        setNewPost={setNewPost}
        onBack={handleBack}
        onSubmit={handleWritePost}
        regions={regionData}
        StarRating={StarRating}
      />
    );
  }

  return (
    <div className="board-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 상단 헤더 */}
      <header className="board-header">
        {/* 1. 왼쪽: 뒤로가기 버튼 */}
        <span onClick={handleBack} style={{ cursor: 'pointer' }}>〈</span>

        {/* 2. 중앙: 제목과 지역 선택 메뉴 */}
        <div className="header-title-box" style={{ position: 'relative' , minWidth: '150px' }}>
          <span className="header-main-title">グルメ掲示板</span>
          <span
            className="header-sub-title"
            onClick={() => setRegionMenuOpen(!regionMenuOpen)}
            style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            {selectedRegion} ▼
          </span>

          {/* 지역 선택 드롭다운 (이중 메뉴) */}
          {regionMenuOpen && (
            <div style={{
              position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)',
              backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)', display: 'flex',
              width: '320px', height: '320px', zIndex: 1000, overflow: 'hidden'
            }}>
              {/* 왼쪽: 지방명 */}
              <div style={{ width: '45%', backgroundColor: '#f8f9fa', borderRight: '1px solid #eee', overflowY: 'auto' }}>
                {Object.keys(regionData).map(main => (
                  <div key={main}
                    onClick={() => {
                      if (main === 'すべて') {
                        setSelectedRegion('すべて');
                        setRegionMenuOpen(false);
                      } else {
                        setTempMainRegion(main);
                      }
                    }}
                    style={{
                      padding: '14px 15px', fontSize: '13px', cursor: 'pointer',
                      backgroundColor: tempMainRegion === main ? 'white' : 'transparent',
                      fontWeight: tempMainRegion === main ? 'bold' : 'normal',
                      color: tempMainRegion === main ? '#1976d2' : '#333'
                    }}
                  >
                    {main === 'すべて' ? '🌐 すべて' : main}
                  </div>
                ))}
              </div>

              {/* 오른쪽: 도도부현 */}
              <div style={{ width: '55%', overflowY: 'auto' }}>
                {tempMainRegion !== 'すべて' ? (
                  regionData[tempMainRegion].map(sub => (
                    <div key={sub}
                      onClick={() => {
                        setSelectedRegion(sub);
                        setRegionMenuOpen(false);
                      }}
                      style={{
                        padding: '12px 20px', fontSize: '13px', cursor: 'pointer',
                        backgroundColor: selectedRegion === sub ? '#e3f2fd' : 'white',
                        color: selectedRegion === sub ? '#1976d2' : '#333'
                      }}
                    >
                      {sub}
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '40px 10px', color: '#aaa', fontSize: '12px', textAlign: 'center' }}>
                    地方を選択してください
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 3. 오른쪽: 검색 및 더보기 메뉴 */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <span onClick={() => setSearchOpen(!searchOpen)} style={{ cursor: 'pointer' }}>🔍</span>

          {/* 더보기 아이콘과 메뉴 */}
          <span onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: 'pointer', position: 'relative' }}>
            ⋮
            {menuOpen && (
              <div style={{
                position: 'absolute', top: '30px', right: '0',
                backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)', minWidth: '160px', zIndex: 1000
              }}>
                <div
                  onClick={(e) => { e.stopPropagation(); setCurrentView('feedback'); setMenuOpen(false); }}
                  style={{ padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid #eee', fontSize: '12px' }}
                >
                  📝 ご意見・お問い合わせ
                </div>
                <div
                  onClick={(e) => { e.stopPropagation(); alert('設定'); setMenuOpen(false); }}
                  style={{ padding: '12px 16px', cursor: 'pointer', fontSize: '12px' }}
                >
                  ⚙️ 設定
                </div>
              </div>
            )}
          </span>
        </div>
      </header>

      {/* 검색창 */}
      {searchOpen && (
        <div style={{ padding: '15px', backgroundColor: 'white' }}>
          <input
            type="text"
            placeholder="検索ワードを入力"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>
      )}

      {/* Notice */}
      <div className="p-2">
        <div
          className="d-flex align-items-center"
          onClick={() => setCurrentView('notice')}
          style={{
            backgroundColor: "#ffecd9",
            padding: "10px",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: "bold",
            gap: "8px",
            cursor: "pointer"
          }}
        >
          <span>📢</span>
          <span>グルメ掲示板ご利用方法とルール</span>
        </div>
      </div>

      {/* 리스트 */}
      <div className="post-list" style={{ flex: 1, minHeight: 0 }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} className="post-item"
              onClick={() => {
                setSelectedPost(post);
                setCurrentView('detail');
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="post-content-area">
                <h3 className="post-title">
                  {selectedRegion === 'すべて' && post.region && (
                    <span style={{
                      fontSize: '11px',
                      color: '#666',
                      marginRight: '6px',
                      padding: '2px 5px',
                      borderRadius: '4px'
                    }}>
                      [{post.region}]
                    </span>
                  )} {post.title}
                </h3>

                <p className="post-summary">{post.content}</p>
                <div className="post-meta">
                  <span style={{ color: '#FFD700', marginRight: '8px' }}>⭐ {post.rating}</span>
                  <span style={{ color: '#ff4d4d' }}>👍 {post.likes} 💬 {post.comments} </span>
                  {post.meta}
                </div>
              </div>
              <img src={post.img} alt="food" className="post-image" />
            </div>
          ))
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#999',
            gap: '12px'
          }}>
            <span style={{ fontSize: '48px' }}>📝</span>
            <p style={{ fontSize: '14px', margin: 0 }}>まだ投稿がありません</p>
            <p style={{ fontSize: '12px', margin: 0 }}>最初の投稿者になってください！</p>
          </div>
        )}
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