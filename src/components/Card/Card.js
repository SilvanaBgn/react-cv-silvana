import React from 'react';
import CardDescription from './CardDescription';
import styles from './Card.module.css';

function getFormatedDate(pDate) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        dateMonth = pDate.getMonth(),
        dateYear = pDate.getFullYear(),
        now = new Date(Date.now());

  const isToday = dateYear === now.getFullYear() && dateMonth === now.getMonth();
  return isToday ? 'present' : `${months[dateMonth-1]} ${dateYear}`; 
}

class Card extends React.Component {
  constructor(props){
    super();
    this.item = props.item;
    this.expandable = this.item.expandable;
    this.state = {
      expanded: false
    }
  }

  onCardClick = () => {
    if (this.expandable) {
      this.setState((prevState, prevProps) => {
        return { expanded: !prevState.expanded}
      })
    }
  }

  render(){
  console.log('render this:',this);
    return (
      <div className={styles.card} onClick={this.onCardClick}>
        <p className={styles.cardTitle}>{this.item.title}</p>
        <p className={styles.cardCompany}>{this.item.company}</p>
        <p className={styles.cardDates}>{`${getFormatedDate(this.item.startDate)} - ${getFormatedDate(this.item.finishDate)}`}</p>
        {this.state.expanded ? <CardDescription desc={this.expandable.description} techsArray={this.expandable.technologies} /> : null
        }
        
      </div>
    );
  }
}

export default Card;