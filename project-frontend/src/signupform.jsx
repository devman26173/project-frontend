import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    region: "",
    prefecture: ""
  });

  const prefecturesByRegion = {
    北海道: ["北海道"],
    東北: ["青森県","岩手県","宮城県","秋田県","山形県","福島県"],
    関東: ["茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県"],
    中部: ["新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県"],
    近畿: ["三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県"],
    中国: ["鳥取県","島根県","岡山県","広島県","山口県"],
    四国: ["徳島県","香川県","愛媛県","高知県"],
    九州・沖縄: ["福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "region") {
      // 지역 선택 바뀌면 도도부현 초기화
      setFormData(prev => ({
        ...prev,
        region: value,
        prefecture: "",
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleVerify = () => {
    if (!formData.email) return alert("メールを入力してください。");
    alert("認証メールが送信されました: " + formData.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return alert("名前を入力してください。");
    if (!formData.email) return alert("メールを入力してください。");
    if (!formData.password || formData.password.length < 8)
      return alert("パスワードを8文字以上入力してください。");
    if (!formData.region) return alert("地域を選択してください。");
    if (!formData.prefecture) return alert("都道府県を選択してください。");

    alert("会員登録が完了しました！");
    console.log(formData);
  };

  return (
    <div className="container py-4" style={{ maxWidth: "450px" }}>
      <h1 className="text-center fw-bold mb-4">メール会員登録</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">名前</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">メール</label>
          <div className="d-flex gap-2">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleVerify}
            >
              認証する
            </button>
          </div>

        <div className="mb-3">
          <label className="form-label">パスワード</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="8文字以上"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">パスワード確認</label>
          <input
            type="password"
            className="form-control"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
        </div>

        {/* 지역 선택 */}
        <div className="mb-3">
          <label className="form-label">地域</label>
          <select
            className="form-select"
            name="region"
            value={formData.region}
            onChange={handleChange}
          >
            <option value="">地域を選択してください</option>
            {Object.keys(prefecturesByRegion).map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* 도도부현 (region 선택 후만 보임) */}
        {formData.region && (
          <div className="mb-3">
            <label className="form-label">都道府県</label>
            <select
              className="form-select"
              name="prefecture"
              value={formData.prefecture}
              onChange={handleChange}
            >
              <option value="">都道府県を選択してください</option>
              {prefecturesByRegion[formData.region].map(pref => (
                <option key={pref} value={pref}>
                  {pref}
                </option>
              ))}
            </select>
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">
          会員登録
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFF5F3',
    fontFamily: "'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif"
  },
  box: {
    background: 'white',
    padding: '60px 40px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(255, 123, 107, 0.15)',
    width: '100%',
    maxWidth: '400px'
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '30px',
    color: '#FF7B6B',
    fontWeight: '600'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #FFD4CE',
    borderRadius: '4px',
    fontSize: '14px',
    backgroundColor: '#fff',
    color: '#333',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 6px rgba(255, 123, 107, 0.08)'
  },
  select: {
    width: '100%',
    padding: '12px',
    border: '1px solid #FFD4CE',
    borderRadius: '4px',
    fontSize: '14px',
    backgroundColor: '#fff',
    color: '#333',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 6px rgba(255, 123, 107, 0.08)',
    cursor: 'pointer'
  },
  emailGroup: {
    display: 'flex',
    gap: '8px'
  },
  verifyButton: {
    padding: '12px 20px',
    backgroundColor: '#FFE8E5',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#FF7B6B',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 6px rgba(255, 123, 107, 0.1)',
    fontWeight: '500'
  },
  passwordNote: {
    fontSize: '12px',
    color: '#999',
    marginTop: '0',
    marginBottom: '8px'
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#FF7B6B',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '8px',
    fontWeight: '500',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 8px rgba(255, 123, 107, 0.3)'
  }
};

export default SignupForm;
