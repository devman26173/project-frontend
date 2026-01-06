import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Post from './components/Post';
import Board from './Board';
import SignupForm from './SignupForm';
import Profile from './Profile';
import { mockPost } from './mockPost';

function App() {
  return (
    <BrowserRouter>
      <div className="container vh-100 d-flex justify-content-center">
        <Routes>
            <Route path="/board" element={<Board/>} />
            <Route path="/sign-up" element={<SignupForm/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/post" element={
              <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                <Post post={mockPost} />
              </div>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;