import { Layouts } from '../components/layouts/layouts';
import Recruit from './dashboard/recruit';
import Hero from './dashboard/hero';
import Students from './dashboard/students';

const Dashboard = () => {
  return (
    <Layouts>
      <div className="flex flex-col gap-50 lg:gap-150">
        <Hero />
        <Students />
        <Recruit />
      </div>
    </Layouts>
  )
}

export default Dashboard;