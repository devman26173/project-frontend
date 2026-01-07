import React from "react";

export default function Profile() {
  // 仮データ（あとでAPIやDBに置き換える）
  const recentArticles = [
    {
      id: 1,
      category: "グルメ",
      title: "六本木でBBQランチ",
      time: "12/24 12:30",
    },
    {
      id: 2,
      category: "カフェ",
      title: "表参道の隠れ家カフェ",
      time: "12/22 09:10",
    },
  ];

  const recentComments = [
    {
      id: 1,
      category: "旅行",
      body: "ここ本当に良さそうですね！",
      time: "12/21 18:45",
    },
  ];

  return (
    <div
      className="container-fluid p-0 border"
      style={{ maxWidth: "400px", minHeight: "100vh" }}
    >
      {/* ===== Header ===== */}
      <header className="text-center py-3 fw-bold bg-warning">
        Profile
      </header>

      {/* ===== Basic Information ===== */}
      <section className="p-3">
        <h2 className="fs-6 fw-bold mb-2">Basic Information</h2>

        <div className="card">
          <div className="card-body d-flex gap-3">
            {/* Left */}
            <div className="flex-grow-1">
              <div className="fw-bold small mb-2">ID: user_001</div>
              <p className="small text-secondary mb-0">
                東京在住。グルメとカフェ巡りが好きです☕
              </p>
            </div>

            {/* Right */}
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300"
              alt="profile"
              className="rounded"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== Activity ===== */}
      <section className="p-3">
        <h2 className="fs-6 fw-bold mb-3">Activity</h2>

        {/* Recent Writed */}
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="fs-6 fw-bold mb-2">Recent Writed</h3>

            {recentArticles.map((article) => (
              <div
                key={article.id}
                className="d-flex gap-2 py-2 border-bottom"
              >
                <span className="text-danger small fw-bold">
                  {article.category}
                </span>

                <div className="flex-grow-1">
                  <div className="small">{article.title}</div>
                  <div className="text-muted" style={{ fontSize: "10px" }}>
                    {article.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Commented */}
        <div className="card">
          <div className="card-body">
            <h3 className="fs-6 fw-bold mb-2">Recent Commented</h3>

            {recentComments.map((comment) => (
              <div
                key={comment.id}
                className="d-flex gap-2 py-2 border-bottom"
              >
                <span className="text-danger small fw-bold">
                  {comment.category}
                </span>

                <div className="flex-grow-1">
                  <div className="small">{comment.body}</div>
                  <div className="text-muted" style={{ fontSize: "10px" }}>
                    {comment.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
