import './Bio.css';

const Bio = () => {
  return (
    <div id="greater-bio-area">
      <div id="bio">
        <h2 id="about">About Me</h2>
        <hr />
        <div id="dual-flex">
          <div id="prof">
            <h3>Professional</h3>
            <p>
              Junior full stack web developer, motivated to find a
              challenging technical position where I can make a
              significant contribution. My varied work history
              provided me with a wide set of skills that will
              become an asset to anyone I work with.
            </p>
          </div>
          <div id="pers">
            <h3>Personal</h3>
            <p>
              I am a Historian by education and Programer by passion. As a Former Historian, I am detailed oriented and always driven to learn more. In my free time, I enjoy working on small Arduino projects, 3d printing, and playing guitar. I am also a proud father of one son. My relationship with coding goes beyond professional aspiration. I am truly fascinated by technology as a whole and learning to manipulate it gives me a deep sense of satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bio;
