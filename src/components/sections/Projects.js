
import './Projects.css';


const Project = (props) => {
  return (
    <div id="greater-project-area">
      <h2>Projects</h2>
      <hr />
      <div id="project-area">


        {props.projects.map(target => {
          console.log(target);
          return (
            <div id="project-item" key={target.key}>
              <h2>{target.name}</h2>
              <p>{target.description}</p>

            </div>
          );
        })}


      </div>
    </div>
  );

};
export default Project;

//{props.users.map((user) => (
//  <li key={user.id}>
//    {user.name} ({user.age} years old)
//  </li>
//))}
