import React from 'react';

// data
import friends from './data/friends.json';
import userData from './data/user.json';
import stats from './data/stats.json';
import transactions from './data/transactions.json';

// COMPONENTS
import FriendsList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container';

const App = () => (
  
    <Container>
      <Profile data={userData} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );


export default App;
