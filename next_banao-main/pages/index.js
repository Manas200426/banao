import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";
import Testimonials from "../components/testimonials";
import Testimonials1 from "../components/testimonials1";
import End from "../components/end";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPageSignIn = () => {
  return (
    <div className={styles.landingPageSignIn}>
      <FrameComponent1 />
      <main className={styles.frameParent}>
        <FrameComponent />
        <FrameComponent2 />
        <Testimonials />
        <Testimonials1 />
      </main>
      <End />
      <Footer />
    </div>
  );
};

export default LandingPageSignIn;
