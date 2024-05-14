import React from 'react';
/*import skillsList from "../work/Data.jsx";*/

const WorkItems = ({ item }) => {
  const handleDemoClick = (event) => {
    event.preventDefault();
    window.open(item.url, '_blank');
  };
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <span className="work_skills">{/*item.skills*/}</span>
      <span className="work_project">{/*item.project*/}</span>
      <a href={item.url} className="work__button" onClick={handleDemoClick}>
        Live Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}


export default WorkItems