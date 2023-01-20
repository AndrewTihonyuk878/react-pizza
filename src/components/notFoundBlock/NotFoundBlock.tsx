import React from 'react';
import styles from './notFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing was found
      </h1>
      <p className={styles.description}>
        Unfortunately, this page is not available in the online store.
      </p>
    </div>
  );
};

export default NotFoundBlock;
