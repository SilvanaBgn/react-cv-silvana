import React from 'react';
import profilePic from '../../assets/profile_pic.jpg';
import styles from './Profile.module.css';

function Menu() {
  return (
    <React.Fragment>
      <img className={styles.profile} src={profilePic} alt="profile pic"/>
      <p className={styles.name}>Silvana B. García</p>
    </React.Fragment>
  );
}

export default Menu;