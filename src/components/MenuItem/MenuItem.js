import React from 'react';
import styles from './MenuItem.module.css';

function MenuItem(props) {
  return (
    <React.Fragment>
    <li className={styles.item}>
      <img src={props.iconPath} alt={`${props.itemName} icon`}/>
      {props.itemName}
    </li>
    </React.Fragment>
  );
}

export default MenuItem;