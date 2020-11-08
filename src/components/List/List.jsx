import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

const List = ({ users, setActiveId }) => {
  return (
    <>
      {users.map(user => (
        <div
          key={user.id}
          className={styles.listItem}
          onClick={() => setActiveId(user.id)}
        >
          {user.name}
        </div>
      ))}
    </>
  );
};

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  setActiveId: PropTypes.func,
};

export default List;
