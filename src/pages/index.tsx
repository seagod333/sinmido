import { HeaderSpacing, Layouts } from '../components/layouts/layouts';
import Students from './dashboard/students';
import Recruit from './dashboard/recruit';
import Hero from './dashboard/hero';

const Dashboard = () => {
  return (
    <Layouts topPage={true}>
      <HeaderSpacing className="flex flex-col gap-50 lg:gap-150">
        <Hero />
        <Students />
        <Recruit />
      </HeaderSpacing>
    </Layouts>
  )
}

export default Dashboard;