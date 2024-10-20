
import Hero from './Hero';
import NavigationBar from './NavigationBar';
import Hr1 from './Hr1';
import Aboutme from './Aboutme';
import Skills from './Skills';
import './Container.css'
import Projects from './Projects';

function App() {
  return (
    <div className="container">
      <NavigationBar/>
      <Hr1/>
      <Hero/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      
    </div>
  );
}

export default App;
