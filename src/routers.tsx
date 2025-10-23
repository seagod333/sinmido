import React, { Suspense, lazy, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound, Loading, ErrorBoundary } from './components/pages';
import { Layouts } from './components/layouts/layouts';

// TypeScript interfaces
interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  exact?: boolean;
  topPage?: boolean;
}

// Lazy load components for better performance
const Dashboard = lazy(() => import('./pages/index'));
const CorporateCulture = lazy(() => import('./pages/corporate-culture'));
const CorporateIntelligence = lazy(() => import('./pages/corporate-intelligence'));
const Interview = lazy(() => import('./pages/interview'));
const InterviewDetails = lazy(() => import('./pages/interview/details'));
const WorkEnvironment = lazy(() => import('./pages/work-environment'));
const AppRequirements = lazy(() => import('./pages/requirements'));

// Route configuration
const routeConfigs: RouteConfig[] = [
  { path: '/', component: Dashboard, exact: true, topPage: true },
  { path: '/corporate-culture', component: CorporateCulture },
  { path: '/corporate-intelligence', component: CorporateIntelligence },
  { path: '/interview', component: Interview },
  { path: '/interview/details', component: InterviewDetails },
  { path: '/work-environment', component: WorkEnvironment },
  { path: '/requirements', component: AppRequirements }
];

// Optimized Routers component
export const Routers = memo(() => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routeConfigs.map(({ path, component: Component, topPage }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Layouts topPage={topPage}>
                    <Component />
                  </Layouts>
                }
              />
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