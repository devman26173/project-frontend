import React from "react";

const FoodBoard = () => {
  const posts = [
    {
      id: 1,
      title: "六本木で本格アメリカンBBQ🍖",
      content:
        "お肉がホロホロでボリューム満点！スモーキーな香りが食欲をそそります。大人数での飲み会にも最高✨",
      meta: "12:24 | 作成者",
      img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400",
    },
    {
      id: 2,
      title: "恵比寿の絶品パエリアランチ🇪🇸",
      content:
        "本格的なスペイン料理が楽しめるお店。魚介の旨味が凝縮されたパエリアは絶対に食べてほしい一品です！",
      meta: "12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    },
    {
      id: 3,
      title: "中目黒のお洒落な薪窯ピザ🍕",
      content:
        "生地がモチモチで香ばしい！本格的なナ폴리ピザが楽しめます。デートや女子会にもおすすめ！",
      meta: "12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    },
    {
      id: 4,
      title: "表参道で見つけたヘルシーポケ丼🥗",
      content:
        "新鮮なマグロとアボカドがたっぷり！トッピングも選べて、ダイエット中のランチにぴったりです。",
      meta: "12/24 | 作成者",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    },
  ];

  return (
    <div
      className="container-fluid p-0"
      style={{
        maxWidth: "400px",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        fontFamily: "'Apple SD Gothic Neo', sans-serif",
        border: "1px solid #eeeeee",
      }}
    >
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "#ffb773",
          padding: "12px 16px",
        }}
      >
        <span style={{ fontSize: "18px" }}>〈</span>

        <div className="text-center">
          <div
            style={{
              fontSize: "14px",
              fontWeight: "800",
              lineHeight: 1,
            }}
          >
            グルメ掲示板
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "800",
              lineHeight: 1,
            }}
          >
            東京 ▼
          </div>
        </div>

        <div className="d-flex" style={{ gap: "15px", fontSize: "18px" }}>
          <span>🔍</span>
          <span>⋮</span>
        </div>
      </div>

      {/* Notice */}
      <div className="p-2">
        <div
          className="d-flex align-items-center"
          style={{
            backgroundColor: "#ffecd9",
            padding: "10px",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: "bold",
            gap: "8px",
          }}
        >
          <span>📢</span>
          <span>グルメ掲示板ご利用方法とルール</span>
        </div>
      </div>

      {/* Posts */}
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="d-flex"
            style={{
              padding: "16px",
              borderBottom: "1px solid #f2f2f2",
              gap: "12px",
            }}
          >
            {/* Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  lineHeight: 1.3,
                  marginBottom: "4px",
                }}
              >
                {post.title}
              </div>

              <p
                style={{
                  fontSize: "12px",
                  color: "#555555",
                  lineHeight: 1.5,
                  margin: "0 0 8px 0",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.content}
              </p>

              <div
                style={{
                  fontSize: "10px",
                  color: "#a0a0a0",
                }}
              >
                <span style={{ color: "#ff4d4d" }}>👍 1 💬 1 </span>
                {post.meta}
              </div>
            </div>

            {/* Image */}
            <img
              src={post.img}
              alt="food"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "12px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating Button */}
      <div
        className="position-fixed start-50 translate-middle-x"
        style={{ bottom: "30px" }}
      >
        <button
          className="btn"
          style={{
            backgroundColor: "#f9f9f9",
            border: "1px solid #eeeeee",
            padding: "12px 25px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
        >
          글쓰기 ✏️
        </button>
      </div>
    </div>
  );
};

export default FoodBoard;
