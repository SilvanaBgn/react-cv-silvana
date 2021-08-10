import React from 'react';
import styles from './css/Work.module.css';
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Card from '../components/Card/Card';

const workExperience = [{
    company: 'Globant',
    title: 'Ssr Web UI Developer',
    startDate: new Date(2019, 8),
    finishDate: new Date(Date.now()),
    expandable: {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      technologies: ['reactjs', 'html5', 'css3', 'nodejs', 'express']
    }
  },{
    company: 'Sydesys IT Solutions',
    title: 'Fullstack Developer',
    startDate: new Date(2017, 4),
    finishDate: new Date(2019, 8),
    expandable: {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ['reactjs', 'html5', 'css3', 'nodejs', 'express']
    }
  }
]

function Work(props) {
  return (
    <React.Fragment>
      <SectionTitle title={props.title} iconPath={props.iconPath}/>
      <section className={styles.sectionWork}>
       {
          workExperience.map((elem, i) => {
            return <Card key={i} item={elem} />
          })
       }
      </section>
    </React.Fragment>
  );
}

export default Work;
