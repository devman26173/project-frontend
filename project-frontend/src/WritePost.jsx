import React from 'react';

const WritePost = ({ newPost, setNewPost, onBack, onSubmit, regions, StarRating }) => {
const [selectedMain, setSelectedMain] = React.useState('');
const mainRegions = Object.keys(regions).filter(r => r !== 'すべて');
    return (
    <div className="min-vh-100 bg-light" style={{ maxWidth: '400px', margin: '0 auto' }}>
      {/* 헤더 */}
      <header 
        className="d-flex align-items-center justify-content-between p-3 text-white" 
        style={{ backgroundColor: '#ff9800' }}
      >
        <span onClick={onBack} style={{ cursor: 'pointer', fontSize: '20px' }}>〈</span>
        <span className="fw-bold">投稿</span>
        <button 
          onClick={onSubmit}
          className="btn btn-link text-white text-decoration-none p-0 fw-semibold"
        >
          完了
        </button>
      </header>

      {/* 폼 */}
      <div className="p-3">
        {/* 제목 입력 */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="タイトルを入力"
          value={newPost.title}
          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
        />
        
        {/* 이중 지역 선택 카테고리 */}
        <div className="card mb-3">
          <div className="card-body">
            <label className="form-label text-muted small mb-2">エリアを選択</label>
            <div className="d-flex gap-2">
              {/* 1단계: 지방 선택 */}
              <select
                className="form-select"
                value={selectedMain}
                onChange={(e) => {
                  setSelectedMain(e.target.value);
                  setNewPost({...newPost, region: ''}); // 지방이 바뀌면 세부 지역 초기화
                }}
              >
                <option value="">地方を選択</option>
                {mainRegions.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* 2단계: 도도부현 선택 (지방이 선택되었을 때만 활성화) */}
              <select
                className="form-select"
                value={newPost.region}
                onChange={(e) => setNewPost({...newPost, region: e.target.value})}
                disabled={!selectedMain}
              >
                <option value="">都道府県</option>
                {selectedMain && regions[selectedMain].map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            {!newPost.region && <div className="text-danger small mt-1">※ 地域を選択してください</div>}
          </div>
        </div>
        
        {/* 별점 선택 */}
        <div className="card mb-3">
          <div className="card-body">
            <label className="form-label text-muted small mb-2">評価を選択</label>
            <StarRating 
              rating={newPost.rating} 
              onRate={(star) => setNewPost({...newPost, rating: star})}
            />
          </div>
        </div>
        
        {/* 내용 입력 */}
        <textarea
          className="form-control mb-3"
          placeholder="内容を入力"
          rows="10"
          value={newPost.content}
          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
          style={{ resize: 'none' }}
        />
        
        {/* 이미지 URL 입력 */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="画像URL (任意)"
          value={newPost.imageUrl}
          onChange={(e) => setNewPost({...newPost, imageUrl: e.target.value})}
        />
      </div>
    </div>
  );
};

export default WritePost;