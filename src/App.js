import { MotionConfig } from "framer-motion";
import WebsterLanding from "./components/WebsterLanding";
import Constellation from "./components/Constellation";
import { Nav, Marquee, Story, Mission, Services, Brands, Contact, Footer } from "./components/Sections";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <WebsterLanding />
        <Mission />
        <Constellation />
        <Story />
        <Services />
        <Brands />
        <Contact />
      </main>
      <footer>
        <Marquee />
        <Footer />
      </footer>
    </MotionConfig>
  );
}

export default App;
