import React from 'react';
import './FoodBoard.css';

const FoodBoard = () => {
  const posts = [
    {
      id: 1,
      title: "六本木で本格アメリカンBBQ🍖",
      content: "お肉がホロホロでボリューム満点！スモーキーな香りが食欲をそそります。大人数での飲み会にも最高✨",
      meta: "| 12:24 | 作成者",
      img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400"
    },
    {
      id: 2,
      title: "恵比寿の絶品パエリアランチ🇪🇸",
      content: "本格的なスペイン料理が楽しめるお店。魚介の旨味が凝縮されたパエリアは絶対に食べてほしい一品です！",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400"
    },
    {
      id: 3,
      title: "中目黒のお洒落な薪窯ピザ🍕",
      content: "生地がモチモチで香ばしい！本格的なナポリピザが楽しめます。デートや女子会にもおすすめの雰囲気。",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
    },
    {
      id: 4,
      title: "表参道で見つけたヘルシーポケ丼🥗",
      content: "新鮮なマグロとアボカドがたっぷり！トッピングも選べて、ダイエット中やランチにぴったりなポケボウルです。",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
    }
  ];

  return (
    <div className="board-container">
      {/* 상단 헤더 */}
      <header className="board-header">
        <span>〈</span>
        <div className="header-title-box">
          <span className="header-main-title">グルメ掲示板</span>
          <span className="header-sub-title">東京 ▼</span>
        </div>
        <div style={{display: 'flex', gap: '15px'}}>
          <span>🔍</span>
          <span>⋮</span>
        </div>
      </header>

      {/* 공지사항 */}
      <div className="notice-section">
        <div className="notice-bar">
          <span>📢</span>
          <span>グルメ掲示板ご利用方法とルール</span>
        </div>
      </div>

      {/* 리스트 */}
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <div className="post-content-area">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-summary">{post.content}</p>
              <div className="post-meta">
                <span style={{color: '#ff4d4d'}}>👍 1 💬 1 </span> {post.meta}
              </div>
            </div>
            <img src={post.img} alt="food" className="post-image" />
          </div>
        ))}
      </div>

      {/* 플로팅 버튼 */}
      <div className="write-button-container">
        <button className="write-button">投稿する ✏️</button>
      </div>
    </div>
  );
};

export default FoodBoard;