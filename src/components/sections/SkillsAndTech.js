import codingLanguages from '../../images/languages.png';

import './SkillsAndTech.css';

const skillsArr = [
  { key: Math.random().toString(), item: 'Node.js' },
  { key: Math.random().toString(), item: 'Express' },
  { key: Math.random().toString(), item: 'Navigo' },
  { key: Math.random().toString(), item: 'Axios' },
  { key: Math.random().toString(), item: 'RESTful APIs' },
  { key: Math.random().toString(), item: 'GitHub / Git' },
  { key: Math.random().toString(), item: 'Jira / Trello' },
  { key: Math.random().toString(), item: 'Netlify' },
  { key: Math.random().toString(), item: 'Vercel' },
  { key: Math.random().toString(), item: 'Heroku' },
  { key: Math.random().toString(), item: 'Puppeteer' },
  { key: Math.random().toString(), item: 'Jest' },
  { key: Math.random().toString(), item: 'VS Code' },
  { key: Math.random().toString(), item: 'Tailwind CSS' },
  { key: Math.random().toString(), item: 'Yarn' },

]


const SkillsAndTech = () => {
  return (
    <>

      <div id="greater-skills-area">
        <h2 id="skills-tech">Skills/Tech</h2>
        <hr />
        <img id='languages' src={codingLanguages} alt="" />
        <div id="grid-area">
          <ul id="skills-tech-list">
            {
              skillsArr.map(target => {
                console.log(target);
                return (
                  <span className="skill-item">
                    {target.item}
                  </span>
                );
              })
            }
          </ul>
        </div>


        {/*{props.projects.map(target => {
          console.log(target);
          return (
            <div id="project-item" key={target.key}>
              <h2>{target.name}</h2>
              <p>{target.description}</p>
              <a id="source-code" href={target.sourceCode}>
                <svg xmlns="http://www.w3.org/2000/svg" id="source-code" width="24" height="24" viewBox="0 0 24 24"><path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-11 1l-5 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649zm7 2.201l-5-2.201v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.598z" /></svg>
              </a>

            </div>
          );
        })} */}



      </div>
    </>
  );

};
export default SkillsAndTech;


