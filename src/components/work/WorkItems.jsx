import React from 'react';
import './work.css';
/*import skillsList from "../work/Data.jsx";*/

const WorkItems = ({ item }) => {
  const handleDemoClick = (event) => {
    event.preventDefault();
    window.open(item.url, '_blank');
  };

  const highlightKeywords = (text) => {
    const keywords = ['UX/UI', 'SEO', 'reader-friendly','graphic elements','Brand Logo', 'Designed', 'Redesign','Clean','Modern','user-friendly', 'interface', 'keywords','search rankings' ];  // 需要高亮的关键字列表
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };


  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <div className="work_skills">
        {/* 确保 item.skills 存在并且可以被遍历 */}
        {item.skills && item.skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>

      <p className="work__descriptions" dangerouslySetInnerHTML={{ __html: highlightKeywords(item.descriptions) }}></p>  {/* 新添加的段落 */}

      <span className="work_project">{/*item.project*/}</span>
      <a href={item.url} className="work__button" onClick={handleDemoClick}>
        Live Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}


export default WorkItems