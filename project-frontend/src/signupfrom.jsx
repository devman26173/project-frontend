import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    region: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerify = () => {
    if (!formData.email) {
      alert('メールを入力してください。');
      return;
    }
    alert('認証メールが送信されました: ' + formData.email);
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

    if (!formData.password || formData.password.length < 8) {
      alert('パスワードを8文字以上入力してください。');
      return;
    }

    if (!formData.region) {
      alert('地域を入力してください。');
      return;
    }

    alert('会員登録が完了しました！');
    console.log(formData);
  };

  return (
    <div style={styles.container}>
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
            placeholder="パスワードを確認してください"
            style={styles.input}
          />
        </div>
         {/* パスワード確認  */}
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
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            placeholder="地域を選択してください.."
            style={styles.input}
          />
        </div>

        {/* 会員登録ボタン */}
        <button type="submit" style={styles.submitButton}>
          会員登録
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: "'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif"
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '30px',
    color: '#000',
    fontWeight: '600'
  },
  formGroup: {
    marginBottom: '24px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#000',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: 'none',
    fontSize: '14px',
    backgroundColor: '#e8e8e8',
    color: '#666',
    outline: 'none',
    boxSizing: 'border-box'
  },
  emailGroup: {
    display: 'flex',
    gap: '8px'
  },
  verifyButton: {
    padding: '12px 20px',
    backgroundColor: '#d8d8d8',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666',
    whiteSpace: 'nowrap'
  },
  passwordNote: {
    fontSize: '12px',
    color: '#aaa',
    marginTop: '0',
    marginBottom: '8px'
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#d0d0d0',
    border: 'none',
    fontSize: '16px',
    color: '#666',
    cursor: 'pointer',
    marginTop: '8px',
    fontWeight: '500'
  }
};

export default SignupForm;