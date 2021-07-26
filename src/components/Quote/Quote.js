import styles from './Quote.module.css';

function Quote(props) {
  return <p className={styles.biography}>{props.text}</p>
}

export default Quote;