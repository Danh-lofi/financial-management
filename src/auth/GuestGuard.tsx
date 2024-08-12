// routes
// components
import { SCREENS } from '../constants/screen.constants';
import { navigate } from '../services/navigate';
//
import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({children}: GuestGuardProps) {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    navigate(SCREENS.main.home);
  }
  return <>{children}</>;
}
