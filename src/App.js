import { MotionConfig } from "framer-motion";
import WebsterLanding from "./components/WebsterLanding";
import Constellation from "./components/Constellation";
import { Nav, Marquee, Story, Mission, Services, Contact, Footer } from "./components/Sections";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <WebsterLanding />
        <Marquee />
        <Constellation />
        <Story />
        <Mission />
        <Services />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
