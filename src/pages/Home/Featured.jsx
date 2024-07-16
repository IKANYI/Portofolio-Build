<<<<<<< HEAD

=======
// import React from 'react'
>>>>>>> 72a7508ca3e8fbd1d4dddee69b3036439685337e
import '../main.css'
import dashImg from "../../assets/dash.jpg";
import portImg from "../../assets/portrait.jpg";
import mayaImg from "../../assets/maya.jpg";
function Featured() {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, accusantium esse. Illum cupiditate blanditiis earum laborum ea id in officia. </p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero quasi recusandae maxime vero explicabo mollitia quos est, culpa earum.</p>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eum fugiat rem qui. Eius in consectetur tempore est quaerat. Vel.</p>
          </div>
        </div>
      </div>
  )
}

export default Featured;