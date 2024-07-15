import Hero from "./Home/Hero";
import dashImg from "../assets/dash.jpg";
import portImg from "../assets/portrait.jpg";
import mayaImg from "../assets/maya.jpg";

import "./main.css";
function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="recent-post">
        <div className="recent-post-head">
          <h3>Recent posts</h3>
          <a href="">View all</a>
        </div>
        <div className="post">
          <div className="post-left">
            <h2>Making design system from scratch</h2>
            <h4>12 Feb 2020 | Design Pattern</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              illum quam consectetur. Odio nesciunt quam accusantium quis
              excepturi aliquid nemo.
            </p>
          </div>
          <div className="post-right">
            <h2>Creating pixel perfect icons in Figma</h2>
            <h4>12 Feb 2020 | Figma,Icon Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              illum quam consectetur. Odio nesciunt quam accusantium quis
              excepturi aliquid nemo.
            </p>
          </div>
        </div>
      </div>
      <div className="featured-work">
        <h3>Featured Works</h3>
        <div className="works">
          <div className="works-img">
            <img src={dashImg} alt="work thumbnail" />
          </div>
          <div className="works-text">
            <h3>Designing Dashboards</h3>
            <div className="works-date">
              <h4>2020</h4>
              <p>Dashboard</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, asperiores?
            </p>
          </div>
        </div>
        <div className="works">
          <div className="works-img">
            <img src={portImg} alt="work thumbnail" />
          </div>
          <div className="works-text">
            <h3>Vibrant Portraits of 2020</h3>
            <div className="works-date">
              <h4>2018</h4>
              <p>Illustration</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, asperiores?
            </p>
          </div>
        </div>
        <div className="works">
          <div className="works-img">
            <img src={mayaImg} alt="work thumbnail" />
          </div>
          <div className="works-text">
            <h3>36 days of Malayalam type</h3>
            <div className="works-date">
              <h4>2018</h4>
              <p>Typography</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, asperiores?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
