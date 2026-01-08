import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container position-relative vh-100">
      {/* 버튼 그룹 */}
      <div className="position-absolute bottom-0 end-0 p-3" style={{ minWidth: "150px" }}>
        <Link to="/login" className="d-block mb-2">
          <button
            type="button"
            className="btn btn-dark w-100"
          >
            Login
          </button>
        </Link>

        <Link to="/signup" className="d-block">
          <button
            type="button"
            className="btn btn-dark w-100"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
