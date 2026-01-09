import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    region: '',
    prefecture: ''
  });

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [prefecturesByRegion, setPrefecturesByRegion] = useState({});
  const [loading, setLoading] = useState(true);

  // API에서 지역 데이터 가져오기
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/regions');
        const data = await response.json();
        
        setPrefecturesByRegion(data.prefecturesByRegion);
        setLoading(false);
      } catch (error) {
        console.error('地域データの取得に失敗しました:', error);
        setLoading(false);
        alert('地域データの取得に失敗しました。');
      }
    };

    fetchRegions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'region') {
      setFormData(prev => ({
        ...prev,
        region: value,
        prefecture: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleVerify = () => {
    if (!formData.email) {
      alert('メールを入力してください。');
      return;
    }
    
    alert('認証メールが送信されました: ' + formData.email);
    setIsEmailVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      alert('名前を入力してください。');
      return;
    }

    if (!formData.email) {
      alert('メールを入力してください。');
      return;
    }

    if (!isEmailVerified) {
      alert('メール認証を完了してください。');
      return;
    }

    if (!formData.password || formData.password.length < 8) {
      alert('パスワードを8文字以上入力してください。');
      return;
    }

    if (!formData.region) {
      alert('地域を選択してください。');
      return;
    }

    if (!formData.prefecture) {
      alert('都道府県を選択してください。');
      return;
    }

    alert('会員登録が完了しました！');
    console.log(formData);
    
    navigate('/login');
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <p style={{ textAlign: 'center', color: '#FF7B6B' }}>読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>メール会員登録</h1>
        
        <form onSubmit={handleSubmit}>
          {/* 名前 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>名前</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="名前を入力してください"
              style={styles.input}
            />
          </div>

          {/* メール */}
          <div style={styles.formGroup}>
            <label style={styles.label}>メール</label>
            <div style={styles.emailGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="メールを入力してください"
                style={{...styles.input, flex: 1}}
              />
              <button
                type="button"
                onClick={handleVerify}
                style={styles.verifyButton}
              >
                認証する
              </button>
            </div>
            {isEmailVerified && (
              <p style={styles.successMessage}>
                ✓ メール認証が完了しました
              </p>
            )}
          </div>

          {/* パスワード */}
          <div style={styles.formGroup}>
            <label style={styles.label}>パスワード</label>
            <p style={styles.passwordNote}>パスワードを入力してください (8文字以上)</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="パスワードを入力してください"
              style={styles.input}
            />
          </div>

          {/* パスワード確認 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>パスワード確認</label>
            <input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              placeholder="パスワードを確認してください"
              style={styles.input}
            />
          </div>

          {/* 地域 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>地域</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="">地域を選択してください</option>
              {Object.keys(prefecturesByRegion).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* 都道府県 */}
          {formData.region && (
            <div style={styles.formGroup}>
              <label style={styles.label}>都道府県</label>
              <select
                name="prefecture"
                value={formData.prefecture}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">都道府県を選択してください</option>
                {prefecturesByRegion[formData.region]?.map((pref) => (
                  <option key={pref} value={pref}>
                    {pref}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* 会員登録ボタン */}
          <button type="submit" style={styles.submitButton}>
            会員登録
          </button>
        </form>
      </div>
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
  successMessage: {
    fontSize: '12px',
    color: '#52C79F',
    marginTop: '8px',
    marginBottom: '0',
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