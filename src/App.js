
import Hero from './Hero';
import NavigationBar from './NavigationBar';
import Hr1 from './Hr1';
import Aboutme from './Aboutme';
import Skills from './Skills';
import './Container.css'
import Projects from './Projects';
import Certificates from './Certificates';
import AboutHeading from './AboutHeading';

function App() {
  return (
    <div className="container">
      
    
      <Hero/>
      
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Hr1/>
      <Certificates/>
      
    </div>
  );
}

export default App;
