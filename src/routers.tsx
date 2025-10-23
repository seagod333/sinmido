import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/index';
import CorporateCulture from './pages/corporate-culture';
import CorporateIntelligence from './pages/corporate-intelligence';
import Interview from './pages/interview';
import InterviewDetails from './pages/interview/details';
import WorkEnvironment from './pages/work-environment';
// import { useGlobalContext } from './provider';

export const Routers = () => {
  // const [globalState]: GlobalContextType = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/corporate-culture' element={<CorporateCulture />} />
        <Route path='/corporate-intelligence' element={<CorporateIntelligence />} />
        <Route path="/interview" element={<Interview />} />
        <Route path='/interview/details' element={<InterviewDetails />} />
        <Route path='/work-environment' element={<WorkEnvironment />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}