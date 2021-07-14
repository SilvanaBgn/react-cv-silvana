import React from 'react';
import styles from './Menu.module.css';
import Profile from '../Profile/Profile';
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
      <React.Fragment>
        <header className={styles.header}>
          <Profile/>
          <button className={`${styles.button} ${this.state.menuOpened ? styles.buttonClose : styles.buttonBurger}`} onClick={this.onBurgerClick}></button>
        </header>
        <ul className={this.state.menuOpened ? styles.menuOpened : styles.menuClosed} >
          {this.items.map((element, i) => {
            return <MenuItem key={i} itemName={element.itemName} iconPath={`assets/${element.iconName}.svg`} />
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Menu;