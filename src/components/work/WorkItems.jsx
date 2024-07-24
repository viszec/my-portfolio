import React, { useRef } from "react";
import "./work.css";
/*import skillsList from "../work/Data.jsx";*/

const WorkItems = ({ item }) => {
  const timeoutRef = useRef(null);

  const handleDemoClick = (event) => {
    event.preventDefault();
    window.open(item.url, "_blank");
  };

  const highlightKeywords = (text) => {
    const keywords = [
      "Visual Identity",
      "Module Integration",
      "UX/UI",
      "SEO",
      "reader-friendly",
      "graphic elements",
      "Brand Logo",
      "Designed",
      "Redesigned",
      "Clean",
      "Modern",
      "user-friendly",
      "interface",
      "keywords",
      "search rankings",
      "PNG",
      "SVG",
      "CSS",
      "JSON",
      "JavaScript",
      "HTML",
      "CSS",
      "user experience",
      "full-stack",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "JWT",
      "Material UI",
    ]; // Highlight keywords
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const highlightedKeywords = new Set();

    return text.replace(regex, (match) => {
      if (highlightedKeywords.has(match.toLowerCase())) {
        return match;
      } else {
        highlightedKeywords.add(match.toLowerCase());
        return `<span class="highlight">${match}</span>`;
      }
    });
  };

  const handleMouseEnter = (e) => {
    const imgWrapper = e.currentTarget.querySelector(".work__img-wrapper");
    const staticImg = imgWrapper.querySelector(".static-img");
    const gifImg = imgWrapper.querySelector(".gif-img");
    staticImg.style.opacity = 0;
    gifImg.style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    const imgWrapper = e.currentTarget.querySelector(".work__img-wrapper");
    const staticImg = imgWrapper.querySelector(".static-img");
    const gifImg = imgWrapper.querySelector(".gif-img");
    staticImg.style.opacity = 1;
    gifImg.style.opacity = 0;
  };

  document.querySelectorAll(".work__card").forEach((card) => {
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  });

  /* const handleMouseEnter = (e) => {
    const img = e.target;
    clearTimeout(timeoutRef.current);
    img.style.opacity = 0;
    timeoutRef.current = setTimeout(() => {
      img.src = img.getAttribute("data-gif");
      img.style.opacity = 1;
    }, 50);
  };

  const handleMouseLeave = (e) => {
    const img = e.target;
    clearTimeout(timeoutRef.current);
    img.style.opacity = 0;
    timeoutRef.current = setTimeout(() => {
      img.src = img.getAttribute("data-static");
      img.style.opacity = 1;
    }, 50);
  }; */

  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-wrapper">
        <img
          src={item.staticImage}
          data-static={item.staticImage}
          alt=""
          className="work__img static-img"
        />
        <img
          src={item.gifImage}
          data-gif={item.gifImage}
          alt=""
          className="work__img gif-img"
        />
      </div>
      {/* <img
        src={item.staticImage}
        data-static={item.staticImage}
        data-gif={item.gifImage}

        alt=""
        className="work__img"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      /> */}
      <h3 className="work__title">{item.title}</h3>
      <div className="work_skills">
        {item.skills &&
          item.skills.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
      </div>
      <div className="work__descriptions">
        {Array.isArray(item.descriptions) ? (
          item.descriptions.map((desc, index) => (
            <p
              key={index}
              className="work__description"
              dangerouslySetInnerHTML={{ __html: highlightKeywords(desc) }}
            ></p>
          ))
        ) : (
          <p
            className="work__description"
            dangerouslySetInnerHTML={{
              __html: highlightKeywords(item.descriptions),
            }}
          ></p>
        )}
      </div>
      <a href={item.url} className="work__button" onClick={handleDemoClick}>
        Live Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
