import { memo, Suspense, lazy } from 'react';
import { Layouts } from '../components/layouts/layouts';
import { Loading, HeaderSpacing } from '../components/common/index';

// Lazy load dashboard components for better performance
const Hero = lazy(() => import('./dashboard/hero'));
const Students = lazy(() => import('./dashboard/students'));
const Recruit = lazy(() => import('./dashboard/recruit'));

// TypeScript interfaces
interface DashboardProps {
  className?: string;
}

// Loading fallback component for dashboard sections
const DashboardSectionLoader = memo(() => (
  <div className="flex items-center justify-center py-20">
    <Loading size="sm" message="読み込み中です..." />
  </div>
))

// Optimized Dashboard component
const Dashboard = memo<DashboardProps>(({ className = "" }) => {
  return (
    <Layouts topPage={true}>
      <HeaderSpacing className={`flex flex-col gap-50 lg:gap-150 ${className}`}>
        <Suspense fallback={<DashboardSectionLoader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<DashboardSectionLoader />}>
          <Students />
        </Suspense>
        
        <Suspense fallback={<DashboardSectionLoader />}>
          <Recruit />
        </Suspense>
      </HeaderSpacing>
    </Layouts>
  )
})

export default Dashboard;