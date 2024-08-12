import {SCREENS} from '../constants/screen.constants';
import {navigate} from '../services/navigate';
import {useAuthContext} from './useAuthContext';

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({children}: AuthGuardProps) {
  const {isAuthenticated, isInitialized} = useAuthContext();

  if (!isInitialized) {
    navigate(SCREENS.auth.login);
  }

  if (!isAuthenticated) {
    navigate(SCREENS.auth.login);
  }

  return <> {children} </>;
}
