import Hero from "./Home/Hero";
import Recent from "./Home/Recent";
import Featured from "./Home/Featured";


import "./main.css";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Recent />
      <Featured />
      
    </div>
  );
}
export default Home;
