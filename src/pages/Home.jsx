import  profileImg from '../assets/simons.jpg';
import './main.css';
function Home() {
  return (
    <div className="home">
      <div className="profile">
        <div className="profile-info">
          <h1>Hi, am John, Creative Technologist</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, rerum fugiat voluptate dolorem reprehenderit corrupti modi facere debitis placeat reiciendis.</p>
          <a href="">download resume</a>
        </div>
        <div className="profile-image">
          <img src={profileImg} alt="profile picture" />
        </div>
      </div>
      <div className="recent-post">
        <div className="recent-post-head">
          <h3>Recent posts</h3>
          <a href="">View all</a>
        </div>
        <div className="post">
          <div className="post-left">
            <h2>Making design system from scratch</h2>
            <h4>12 Feb 2020   |  Design Pattern</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum quam consectetur. Odio nesciunt quam accusantium quis excepturi aliquid nemo.</p>
          </div>
          <div className="post-right">
            <h2>Creating pixel perfect icons in Figma</h2>
            <h4>12 Feb 2020   |  Figma,Icon Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum quam consectetur. Odio nesciunt quam accusantium quis excepturi aliquid nemo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home