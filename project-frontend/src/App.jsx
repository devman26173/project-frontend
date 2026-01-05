import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './Board';
import SignupForm from './SignupForm';

function App() {
  return (
    <BrowserRouter>
      <div className="container vh-100 d-flex justify-content-center">
        <Routes>
            <Route path="/board" element={<Board/>} />
            <Route path="/sign-up" element={<SignupForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;