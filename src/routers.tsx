import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/index';
import CorporateCulture from './pages/corporate-culture';
// import { useGlobalContext } from './provider';

export const Routers = () => {
  // const [globalState]: GlobalContextType = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/corporate-culture' element={<CorporateCulture />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}