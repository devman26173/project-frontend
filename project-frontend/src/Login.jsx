import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLineLogin = () => {
    console.log('LINE으로 10초만에 가입하기');
  };

  const handleKakaoLogin = () => {
    console.log('카카오톡으로 10초만에 가입하기');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { id, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">JOIN</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="login-input"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          
          <input
            type="password"
            className="login-input"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="remember-me">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>로그인 상태 유지</span>
            </label>
          </div>
          
          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>
        
        <button className="social-btn line-btn" onClick={handleLineLogin}>
          LINE으로 10초만에 가입하기
        </button>
        
        <button className="social-btn kakao-btn" onClick={handleKakaoLogin}>
          카카오톡으로 10초만에 가입하기
        </button>
      </div>
    </div>
  );
}

export default Login;
