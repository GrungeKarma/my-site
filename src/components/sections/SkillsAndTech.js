import codingLanguages from '../../images/languages.png';

import './SkillsAndTech.css';

const SkillsAndTech = ({ skillsArr }) => {
  return (
    <div id="greater-skills-area">
      <h2 id="skills-tech">Skills/Tech</h2>
      <hr />
      <img id="languages" src={codingLanguages} alt="" />
      <div id="grid-area">
        <ul id="skills-tech-list">
          {skillsArr.map((target, index) => {
            console.log(target);
            if (index === skillsArr.length - 1) {
              return (
                <span className="last-skill-item">{target.item}</span>
              )
            }
            return (
              <span className="skill-item">{target.item}</span>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SkillsAndTech;
