import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='projets' element={<Layout/>}/>
        <Route path='contact' element={<Layout/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;