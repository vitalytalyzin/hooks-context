import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Details.module.css';

const Details = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_USERS_URL}/${id}.json`);

        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (e) {
        console.log('error:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [id]);

  const content = isLoading || userInfo === null ? (
    <div>Loading...</div>
  ) : (
    <>
      <img
        className={styles.userAvatar}
        src={userInfo.avatar}
        alt="avatar"
      />
      <div>
        <p>{userInfo.name}</p>
        <p>{userInfo.details.position}</p>
        <p>{userInfo.details.company}</p>
        <p>{userInfo.details.city}</p>
      </div>
    </>
  )

  return (
    <div className={styles.wrapper}>
      {content}
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Details;
