import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './Board';

function App() {
  return (
    <BrowserRouter>
      <div className="container vh-100 d-flex justify-content-center">
        <Routes>
            <Route path="/board" element={<Board/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;