import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/index';
// import { useGlobalContext } from './provider';

export const Routers = () => {
  // const [globalState]: GlobalContextType = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}