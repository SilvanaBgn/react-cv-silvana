import styles from './Card.module.css';

function getFormatedDate(pDate) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        dateMonth = pDate.getMonth(),
        dateYear = pDate.getFullYear(),
        now = new Date(Date.now());

  const isToday = dateYear === now.getFullYear() && dateMonth === now.getMonth();
  return isToday ? 'present' : `${months[dateMonth-1]} ${dateYear}`; 
}

function Card(props) {
  return (
    <div className={styles.card}>
      <p className={styles.cardTitle}>{props.item.title}</p>
      <p className={styles.cardCompany}>{props.item.company}</p>
      <p className={styles.cardDates}>{`${getFormatedDate(props.item.startDate)} - ${getFormatedDate(props.item.finishDate)}`}</p>
    </div>
  );
}

export default Card;