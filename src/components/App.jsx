import {Profiles} from 'profile/Profile';
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json';
import transactions from '../transactions.json'
import { Statistics } from 'statistics/Statistics';
import { FriendList } from 'friends/Friends';
import { TransactionHistory } from 'transactionHistory/TransactionHistory';
export const App = () => {
  return (
<>
<Profiles
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions}/>
</>
    
  );
};


