import AuthRoutes from './authRoutes';
import HomeRoutes from './homeRoutes';
import useAuth from '../hooks/auth';

function AppRoutes() {
  const { signed } = useAuth();
  console.log(signed)
  return (
    <>
      {signed ? <HomeRoutes /> : <AuthRoutes />}
    </>
  )
}

export default AppRoutes;