import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/index';
import CorporateCulture from './pages/corporate-culture';
import CorporateIntelligence from './pages/corporate-intelligence';
// import { useGlobalContext } from './provider';

export const Routers = () => {
  // const [globalState]: GlobalContextType = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/corporate-culture' element={<CorporateCulture />} />
        <Route path='/corporate-intelligence' element={<CorporateIntelligence />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}