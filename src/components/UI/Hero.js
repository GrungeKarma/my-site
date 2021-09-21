import FlexArea from './FlexArea';
import './Hero.css';
import FormModal from '../sections/FormModal';


const Hero = (props) => {


  return (
    <div className="hero"  >
      <h1>Anthony Lopez</h1>
      <h2>Web Developer</h2>

      <hr />
      <FlexArea>
        <FormModal />
      </FlexArea>
    </div>
  );

};
export default Hero
