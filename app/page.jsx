import Motion from "../components/Motion";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <Motion>
      <Intro />
      <div className="shell">
        <Nav />
        <main>
          <Hero />
          <Menu />
        </main>
        <Footer />
      </div>
    </Motion>
  );
}
