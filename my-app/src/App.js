import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

