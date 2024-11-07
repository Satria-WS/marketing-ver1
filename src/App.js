import Banner from "./components/Banner";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Service from "./components/Service";

function App() {
  return (
    <div className="p-5">
      <main>
        <Navbar />
        <Hero />
        <Service />
        <Banner />
        <Card />
        <Section/>
     </main>
    </div>
  );
}

export default App;
