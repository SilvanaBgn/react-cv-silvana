import Menu from './components/Menu/Menu';
import WhoIAmPage from './pages/WhoIAm';
import WorkPage from './pages/Work';
import './App.css';
import React from 'react';


const items = [
  { itemName: 'Quién soy', iconName: 'who_i_am', page: 'WhoIAm' },
  { itemName: 'Experiencia laboral', iconName: 'work_experience', page: 'Work'},
  { itemName: 'Formación académica', iconName: 'academics' },
  { itemName: 'Mis proyectos', iconName: 'my_projects' },
  { itemName: 'Charlas', iconName: 'talks' },
  { itemName: 'Mis apuntes', iconName: 'my_notes' },
  { itemName: 'Contacto', iconName: 'contact' }
];

function App() {
  return (
    <div className="App">
      <Menu menuItems ={items}/>
      <div className="AppPage">
        {/* <WhoIAmPage /> */}
        <WorkPage className="Work" title='Experiencia Laboral' iconPath={`assets/work_experience.svg`}/>
        {/* <section style={{height:'1200px'}}></section> */}
      </div>
      <footer>Thanks for passing by! See you next time :)</footer>
      </div>
  )
};

export default App;
