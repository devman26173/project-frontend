import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    region: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVerify = () => {
    if (!formData.email) {
      alert("メールを入力してください。");
      return;
    }
    alert("認証メールが送信されました: " + formData.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      alert("名前を入力してください。");
      return;
    }

    if (!formData.email) {
      alert("メールを入力してください。");
      return;
    }

    if (!formData.password || formData.password.length < 8) {
      alert("パスワードを8文字以上入力してください。");
      return;
    }

    if (!formData.region) {
      alert("地域を入力してください。");
      return;
    }

    alert("会員登録が完了しました！");
    console.log(formData);
  };

  return (
    <div className="container py-4" style={{ maxWidth: "400px" }}>
      <h1
        className="text-center fw-bold"
        style={{ fontSize: "24px", marginBottom: "30px" }}
      >
        メール会員登録
      </h1>

      <form onSubmit={handleSubmit}>
        {/* 이름 */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="form-label"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="名前を入力してください"
            style={{
              backgroundColor: "#e8e8e8",
              border: "none",
              fontSize: "14px",
              color: "#666",
            }}
          />
        </div>

        {/* 이메일 */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="form-label"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            メール
          </label>
          <div className="d-flex gap-2">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="メールを入力してください"
              style={{
                backgroundColor: "#e8e8e8",
                border: "none",
                fontSize: "14px",
                color: "#666",
              }}
            />
            <button
              type="button"
              className="btn"
              onClick={handleVerify}
              style={{
                padding: "12px 20px",
                backgroundColor: "#d8d8d8",
                border: "none",
                fontSize: "14px",
                color: "#666",
                whiteSpace: "nowrap",
              }}
            >
              認証する
            </button>
          </div>
        </div>

        {/* 패스워드 */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="form-label"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            パスワード
          </label>
          <p
            className="mb-1"
            style={{ fontSize: "12px", color: "#aaa" }}
          >
            パスワードを入力してください (8文字以上)
          </p>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            placeholder="パスワードを確認してください"
            style={{
              backgroundColor: "#e8e8e8",
              border: "none",
              fontSize: "14px",
              color: "#666",
            }}
          />
        </div>

        {/* 패스워드 확인 */}
        <div className="mb-4">
          <label
            htmlFor="passwordConfirm"
            className="form-label"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            パスワード確認
          </label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className="form-control"
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="パスワードを確認してください"
            style={{
              backgroundColor: "#e8e8e8",
              border: "none",
              fontSize: "14px",
              color: "#666",
            }}
          />
        </div>

        {/* 지역 */}
        <div className="mb-4">
          <label
            htmlFor="region"
            className="form-label"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            地域
          </label>
          <input
            type="text"
            id="region"
            name="region"
            className="form-control"
            value={formData.region}
            onChange={handleChange}
            placeholder="地域を選択してください.."
            style={{
              backgroundColor: "#e8e8e8",
              border: "none",
              fontSize: "14px",
              color: "#666",
            }}
          />
        </div>

        {/* 제출 버튼 */}
        <div className="d-grid">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#d0d0d0",
              border: "none",
              padding: "14px",
              fontSize: "16px",
              color: "#666",
              fontWeight: "500",
            }}
          >
            会員登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
