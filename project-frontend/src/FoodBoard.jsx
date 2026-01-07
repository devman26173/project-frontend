import React, { useState } from "react";

const FoodBoard = () => {
  const [currentView, setCurrentView] = useState("list");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("東京");
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const regions = ["東京", "大阪", "京都", "福岡", "北海道", "沖縄", "名古屋", "神戸"];

  const [posts] = useState([
    {
      id: 1,
      title: "六本木で本格アメリカンBBQ🍖",
      content: "お肉がホロホロでボリューム満点！",
      meta: "| 12:24 | 作成者",
      img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400",
      rating: 5,
      likes: 1,
      comments: 2,
    },
    {
      id: 2,
      title: "恵比寿の絶品パエリアランチ🇪🇸",
      content: "本格的パエリアおすすめ！",
      meta: "| 12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
      rating: 4,
      likes: 0,
      comments: 1,
    },
  ]);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    if (currentView === "write") setCurrentView("list");
    else alert("이전 페이지로 돌아갑니다");
  };

  const handleWrite = () => {
    setCurrentView("write");
  };

  if (currentView === "write") {
    return (
      <div className="container py-3" style={{ maxWidth: "500px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-link p-0" onClick={handleBack}>
            〈 戻る
          </button>
          <span className="fw-bold">글쓰기</span>
          <button className="btn btn-primary">完了</button>
        </div>
        <div className="form-group mb-3">
          <input className="form-control" placeholder="제목" />
        </div>
        <div className="form-group mb-3">
          <textarea className="form-control" rows={4} placeholder="내용"></textarea>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-3" style={{ maxWidth: "500px", minHeight: "100vh" }}>
      {/* 헤더 */}
      <div className="d-flex justify-content-between align-items-center bg-warning p-2 rounded mb-2">
        <button className="btn btn-link p-0" onClick={handleBack}>
          〈
        </button>

        <div className="text-center">
          <div className="fw-bold">グルメ掲示板</div>
          <div
            className="small text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setRegionMenuOpen(!regionMenuOpen)}
          >
            {selectedRegion} ▼
          </div>

          {regionMenuOpen && (
            <div
              className="position-absolute bg-white rounded shadow-sm"
              style={{ top: "70px", left: "50%", transform: "translateX(-50%)", zIndex: 1000 }}
            >
              {regions.map((r) => (
                <div
                  key={r}
                  className={`p-2 ${selectedRegion === r ? "bg-light text-primary fw-bold" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedRegion(r);
                    setRegionMenuOpen(false);
                  }}
                >
                  {r}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="d-flex gap-3 align-items-center">
          <span style={{ cursor: "pointer" }} onClick={() => setSearchOpen(!searchOpen)}>
            🔍
          </span>
          <span style={{ cursor: "pointer", position: "relative" }} onClick={() => setMenuOpen(!menuOpen)}>
            ⋮
            {menuOpen && (
              <div
                className="position-absolute bg-white border rounded shadow-sm"
                style={{ top: "28px", right: "0", zIndex: 1000 }}
              >
                <div
                  className="px-3 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("의견 보내기")}
                >
                  📝 의견 보내기
                </div>
                <div className="px-3 py-2" style={{ cursor: "pointer" }} onClick={() => alert("설정")}>
                  ⚙️ 설정
                </div>
              </div>
            )}
          </span>
        </div>
      </div>

      {/* 검색창 */}
      {searchOpen && (
        <input
          type="text"
          className="form-control mb-3"
          placeholder="검색 단어 입력"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      )}

      {/* 공지사항 */}
      <div className="bg-light p-2 rounded mb-2">
        <span>📢 グルメ掲示板ご利用方法とルール</span>
      </div>

      {/* 리스트 */}
      <div className="list-group">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="list-group-item mb-2 d-flex align-items-center shadow-sm"
          >
            <img
              src={post.img}
              alt="food"
              className="rounded me-3"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <div className="flex-grow-1">
              <h6 className="mb-1">{post.title}</h6>
              <p className="small text-muted mb-1">{post.content}</p>
              <div className="small text-secondary d-flex justify-content-between">
                <span>⭐ {post.rating}</span>
                <span>{post.meta}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 投稿 버튼 */}
      <div className="position-fixed bottom-0 start-50 translate-middle-x mb-3">
        <button className="btn btn-primary px-4" onClick={handleWrite}>
          投稿する ✏️
        </button>
      </div>
    </div>
  );
};

export default FoodBoard;
