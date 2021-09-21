
import FlexArea from '../UI/FlexArea';
import './Projects.css';


const Project = (props) => {
  return (
    <div id="greater-project-area">
      <h2 id="projects">Projects</h2>
      <hr />
      <FlexArea>


        {props.projects.map(target => {
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
        })}


      </FlexArea>
    </div>
  );

};
export default Project;

//{props.users.map((user) => (
//  <li key={user.id}>
//    {user.name} ({user.age} years old)
//  </li>
//))}
