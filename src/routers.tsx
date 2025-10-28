import { Suspense, lazy, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound, Loading, ErrorBoundary } from './components/common';
import { Layouts } from './components/layouts/layouts';

// TypeScript interfaces
interface RouteConfig {
  path: string;
  component: any;
  exact?: boolean;
}

// Lazy load components for better performance
const Dashboard = lazy(() => import('./pages/index'));
const CorporateCulture = lazy(() => import('./pages/corporate-culture'));
const CorporateIntelligence = lazy(() => import('./pages/corporate-intelligence'));
const Interview = lazy(() => import('./pages/interview'));
const InterviewDetails = lazy(() => import('./pages/interview/details'));
const WorkEnvironment = lazy(() => import('./pages/work-environment'));
const AppRequirements = lazy(() => import('./pages/requirements'));
const JobDescription = lazy(() => import('./pages/job-description'));
const Faqs = lazy(() => import('./pages/faqs'));
const WhitePaper = lazy(() => import('./pages/white-paper'));
const Column = lazy(() => import('./pages/column'));

// Route configuration
const routeConfigs: RouteConfig[] = [
  { path: '/', component: Dashboard, exact: true },
  { path: '/corporate-culture', component: CorporateCulture },
  { path: '/corporate-intelligence', component: CorporateIntelligence },
  { path: '/interview', component: Interview },
  { path: '/interview/details', component: InterviewDetails },
  { path: '/work-environment', component: WorkEnvironment },
  { path: '/requirements', component: AppRequirements },
  { path: '/job-description', component: JobDescription },
  { path: '/faqs', component: Faqs },
  { path: '/white-paper', component: WhitePaper },
  { path: '/column', component: Column }
];

// Optimized Routers component
export const Routers = memo(() => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routeConfigs.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            {/* 404 Route */}
            <Route
              path="*"
              element={
                <Layouts>
                  <NotFound />
                </Layouts>
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
})