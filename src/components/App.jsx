import { Profile } from './profile/profile';
import user from '../user.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
