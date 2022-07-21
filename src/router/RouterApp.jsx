import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../lib/firebase-auth';
import PrivateRoutes from './PrivateRoutes';

import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import RegisterExtra from '../auth/Register/RegisterExtra';
import About from '../pages/LandingPages/about/About';
import CommunityLoan from '../pages/LandingPages/community-loan/CommunityLoan';
import CreditCard from '../pages/LandingPages/credit/CreditCard';
import HomeLoan from '../pages/LandingPages/home-loan/HomeLoan';
import DepositAcc from '../pages/LandingPages/deposit/DepositAcc';
import Market from '../pages/LandingPages/market/Market';
import Welcome from '../pages/Presentation/Welcome';
import ShowActivity from '../pages/LandingPages/deposit/ShowActivity';

function AppRouter() {
  useAuth();

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/RegisterExtra" element={<RegisterExtra />} />
      <Route path="/About" element={<About />} />
      <Route path="/CommunityLoan" element={<CommunityLoan />} />
      <Route path="/CreditCard" element={<CreditCard />} />
      <Route path="/HomeLoan" element={<HomeLoan />} />
      <Route path="/DepositAcc" element={<DepositAcc />} />
      <Route path="/Market" element={<Market />} />

      <Route
        path="/ShowActivity"
        element={(
          <PrivateRoutes>
            <ShowActivity />
          </PrivateRoutes>
   )}
      />
    </Routes>
  );
}

export default AppRouter;
