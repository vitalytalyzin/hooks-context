import React from 'react';
import styles from './List.module.css';

const List = ({ users, setActiveId }) => {
  return (
    <>
      {users.map((user, idx) => (
        <div
          key={idx}
          className={styles.listItem}
          onClick={() => setActiveId(idx)}
        >
          {user.name}
        </div>
      ))}
    </>
  );
};

export default List;
