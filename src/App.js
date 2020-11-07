import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import List from './components/List/List';
import Details from './components/Details/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(0)

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  return (
    <div className={styles.wrapper}>
      <div className={styles.usersWrapper}>
        <List
          users={users}
          setActiveId={setCurrentUserId}
        />
      </div>
      <Details {...users[currentUserId]} />
    </div>
  );
}

export default App;
