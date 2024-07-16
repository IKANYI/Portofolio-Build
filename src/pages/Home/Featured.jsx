// import React from 'react'
import '../main.css'
import dashImg from "../../assets/dash.jpg";
import portImg from "../../assets/portrait.jpg";
import mayaImg from "../../assets/maya.jpg";
function Featured() {
  return (
    <div className="featured-work">
        <h3>Featured Works</h3>
        <div className="works">
            <img src={dashImg} alt="work thumbnail" />
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
  )
}

export default Featured;