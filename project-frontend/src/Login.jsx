import React, { useState, useEffect } from 'react';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Google Fonts 로드
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!id) {
      alert('IDを入力してください。');
      return;
    }
    
    if (!password) {
      alert('パスワードを入力してください。');
      return;
    }
    
    console.log('Login:', { id, password, rememberMe });
    alert('ログインしました！');
  };

  const handleSignup = () => {
    console.log('会員登録ページへ移動');
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>JOIN</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>ID</label>
            <input
              type="text"
              style={styles.input}
              placeholder="IDを入力してください"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>パスワード</label>
            <input
              type="password"
              style={styles.input}
              placeholder="パスワードを入力してください"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div style={styles.checkboxContainer}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                style={styles.checkbox}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span style={styles.checkboxText}>ログイン状態を維持</span>
            </label>
          </div>
          
          <button type="submit" style={styles.btnPrimary}>
            ログイン
          </button>
          
          <button 
            type="button" 
            style={styles.btnOutline} 
            onClick={handleSignup}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#FFE8E5';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            会員登録
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFF5F3',
    fontFamily: "'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif",
    padding: '20px'
  },
  box: {
    background: 'white',
    padding: '80px 40px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(255, 123, 107, 0.15)',
    width: '100%',
    maxWidth: '400px',
    minHeight: '550px'
  },
  title: {
    textAlign: 'center',
    fontSize: '52px',
    marginBottom: '40px',
    color: 'transparent',
    WebkitTextStroke: '2px #FF7B6B',
    fontWeight: '700',
    letterSpacing: '6px',
    fontFamily: "'Montserrat', sans-serif"
  },
  formGroup: {
    marginBottom: '24px'
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
    boxSizing: 'border-box',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 6px rgba(255, 123, 107, 0.08)',
    backgroundColor: '#fff',
    outline: 'none',
    color: '#333'
  },
  checkboxContainer: {
    textAlign: 'right',
    marginBottom: '28px'
  },
  checkboxLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    color: '#999'
  },
  checkbox: {
    marginRight: '6px',
    cursor: 'pointer',
    accentColor: '#FF7B6B',
    width: '16px',
    height: '16px'
  },
  checkboxText: {
    userSelect: 'none'
  },
  btnPrimary: {
    width: '100%',
    padding: '14px',
    marginTop: '12px',
    marginBottom: '12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#FF7B6B',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 8px rgba(255, 123, 107, 0.3)',
    outline: 'none'
  },
  btnOutline: {
    width: '100%',
    padding: '14px',
    border: '2px solid #FF7B6B',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: '#FF7B6B',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
    outline: 'none'
  }
};

export default Login;