import React, { useState } from 'react';

const FeedbackPage = ({ onBack }) => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!feedback.trim()) {
      alert('ご意見を入力してください');
      return;
    }
    alert('貴重なご意見ありがとうございました！');
    setFeedback('');
    setEmail('');
    onBack();
  };

  return (
    <div className="min-vh-100 bg-light" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <header 
        className="d-flex align-items-center justify-content-between p-3 text-white" 
        style={{ backgroundColor: '#ff9800' }}
      >
        <span onClick={onBack} style={{ cursor: 'pointer', fontSize: '20px' }}>〈</span>
        <span className="fw-bold">ご意見・お問い合わせ</span>
        <button 
          onClick={handleSubmit}
          className="btn btn-link text-white text-decoration-none p-0 fw-semibold"
        >
          送信
        </button>
      </header>

      <div className="p-3">
        <div className="card mb-3">
          <div className="card-body">
            <label className="form-label">メールアドレス (任意)</label>
            <input
              type="email"
              className="form-control"
              placeholder="返信用メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <label className="form-label">ご意見・ご要望</label>
            <textarea
              className="form-control"
              rows="10"
              placeholder="改善点、不具合報告、ご要望などを自由にご記入ください"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{ resize: 'none' }}
            />
          </div>
        </div>

        <div className="alert alert-info mt-3" role="alert">
          <small>📝 いただいたご意見はサービス改善の参考にさせていただきます</small>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;