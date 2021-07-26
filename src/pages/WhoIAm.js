import React from 'react';
import Quote from '../components/Quote/Quote';
import styles from './css/WhoIAm.module.css';
import profilePic from '../assets/profile_pic.jpg';
import backgroundPic from '../assets/stains.jpg';

const myName = "Silvana Belén García",
      myJob = "Ssr. FrontEnd Developer",
      myDegree = "Ingeniera en Sistemas de Información",
      mySelfBiography = ["Soy una persona enérgica-creativa, perseverante, detallista, analítica y comunicacional. Me gusta aprender de cada detalle y proponer nuevas ideas. Usualmente me expongo a desafíos, que me permitan superarme y captar oportunidades.",
      "Creo en el liderazgo y en el trabajo en equipo, como un medio para ayudar a la mayor cantidad de personas posibles a mi alrededor."],
      // I'm an enthusiastic, creative and flexible person, but at the same time, a persistent and analytical one too. I love facing challenges and working in teams.
      myLanguages = [{
        language: 'Inglés',
        level: 'Avanzado'
      },{
        language: 'Español',
        level: 'Nativo'
      }]

function WhoIAm() {
  return (
    <React.Fragment>
      <section>
        <img className={styles.background} src={backgroundPic} alt="background"/>
        <img className={styles.profilePic} src={profilePic} alt="profile pic"/>
      </section>
      <section className={styles.presentation}>
        <p className={styles.name}>{myName}</p>
        <p className={styles.job}>{myJob}</p>
        <p className={styles.degree}>{myDegree}</p>
        <div className={styles.biographyGroup}>
        {
          mySelfBiography.map((biography)=>{
            return <Quote text={biography}/>
          })
        }
        </div>
        <p className={styles.languages}>• {
          myLanguages.map(({language, level}, i) => {
            return <span key={i}>{language} {level} • </span>
          })
          }
        </p>
      </section>
    </React.Fragment>
  );
}

export default WhoIAm;
