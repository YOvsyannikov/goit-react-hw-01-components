import { Profile } from './profile/profile';
import user from '../data/user.json';
import { Statistics } from './statistics/statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/friends';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
