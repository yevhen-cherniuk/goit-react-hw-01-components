import React from 'react';

// data
import friends from './data/friends.json';
import userData from './data/user.json';
import stats from './data/stats.json';

// COMPONENTS
import FriendsList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div className="App">
      <h1>First React Homework</h1>
      <FriendsList friends={friends} />
      <Profile data={userData} />
      <Statistics title="Upload stats" stats={stats} />
    </div>
  );
}

export default App;
