import About from "./components/About";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Plane from "./components/plane";
import Testimonial from "./components/testimonial";
import './index.css';

function App() {
  return (
    
      <div class="App bg-white flex flex-col pt-1 max-md:pt-1.5">
        <Nav />
        <Hero />
        <About />
        <Plane />
        <Testimonial />
        <Brand />
        <Footer />
      </div>
    
  );
}

export default App;
