import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <section className=" lg:px-10 lg:py-2 ">
      <Navbar />
      <div className="grid gap-28 md:gap-32">
        <Home />
        <Project />
        <Contact />
      </div>
    </section>
  );
};

export default App;
