import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './Post';
import SignupForm from './SignupForm';
import Profile from './Profile';
import Login from './Login';
import { mockPost } from './mockPost';
import FoodBoard from './FoodBoard';
import ProfileEdit from './ProfileEdit';
import JapanMapPage from './MapPage';

function App() {
  return (
    <BrowserRouter>
      <div className="container vh-100 d-flex justify-content-center">
        <Routes>
            <Route path="/" element={<JapanMapPage/>} />
            <Route path="/board" element={<FoodBoard/>} />
            <Route path="/signup" element={<SignupForm/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/profile-edit" element={<ProfileEdit/>} />
            <Route path="/post" element={
              <div style={{ margin: "0 auto", padding: "20px" }}>
                <Post post={mockPost} />
              </div>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;