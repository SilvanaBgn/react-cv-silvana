import React from 'react';
import styles from './Menu.module.css';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import MenuItem from '../MenuItem/MenuItem';


class Menu extends React.Component {
  constructor(props){
    super();
    this.items = props.menuItems;
  }
  state = {
    menuOpened: false
  };

  onBurgerClick = () => {
    console.log('state', this.state);
    this.setState((prevState, prevProps) => {
      return { menuOpened: !prevState.menuOpened } 
    })
  }

  render() {
    return (
      <header className={styles.header}>
        <ProfileMenu/>
        <button className={`${styles.button} ${this.state.menuOpened ? styles.buttonClose : styles.buttonBurger}`} onClick={this.onBurgerClick}></button>
        <ul className={this.state.menuOpened ? styles.menuOpened : styles.menuClosed} >
          {this.items.map((element, i) => {
            return <MenuItem key={i} itemName={element.itemName} iconPath={`assets/${element.iconName}.svg`} />
          })}
        </ul>
      </header>
    );
  }
}

export default Menu;