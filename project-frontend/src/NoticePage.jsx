import React from 'react';

const NoticePage = ({ onBack }) => {
  const notices = [
    {
      id: 1,
      title: 'グルメ掲示板 利用方法',
      date: '2025-01-01',
      content: `1. グルメ情報を自由に共有してください
2. 星評価とともに、正直なレビューを残してください
3. エリア別に投稿を確認できます
4. 他の方の意見を尊重してください`
    },
    {
      id: 2,
      title: '投稿ガイド',
      date: '2025-01-01',
      content: `• タイトル: 店名と簡単な特徴
- 評価: 1〜5点で評価
- 内容: 味、雰囲気、価格帯などの詳細レビュー
- 写真: 料理写真のURLを追加 (任意)` 
    },
    {
      id: 3,
      title: 'コミュニティ規定',
      date: '2025-01-01',
      content: `❌ 誹謗中傷・広告目的の投稿禁止
❌ 虚偽情報の投稿禁止
✅ 建設的で有益な情報の共有
✅ 互いに尊重し合うコメント文化`
    }
  ];

  return (
    <div className="min-vh-100 bg-light" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <header 
        className="d-flex align-items-center justify-content-between p-3 text-white" 
        style={{ backgroundColor: '#ff9800' }}
      >
        <span onClick={onBack} style={{ cursor: 'pointer', fontSize: '20px' }}>〈</span>
        <span className="fw-bold">お知らせ</span>
        <span style={{ width: '20px' }}></span>
        
      </header>

      <div className="p-3">
        {notices.map(notice => (
          <div key={notice.id} className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="card-title mb-0" style={{ whiteSpace: 'pre-line', fontSize: '16px' }}>{notice.title}</h5>
                <span className="badge bg-warning text-dark">📢</span>
              </div>
              <p className="text-muted small mb-3">{notice.date}</p>
              <p className="card-text" style={{ whiteSpace: 'pre-line', fontSize: '12px' }}>
                {notice.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticePage;