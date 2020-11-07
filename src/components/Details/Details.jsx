import React from 'react';
import styles from './Details.module.css';

const Details = ({ id, name }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userAvatar} />
      {name}
    </div>
  );
};

export default Details;
