import styles from './SectionTitle.module.css'

function SectionTitle(props) {
  return (
      <h1 className={styles.title}>
        <img className={styles.icon} src={props.iconPath} alt={`${props.title} icon`}/>
        {props.title}
      </h1>
  )
}

export default SectionTitle;
