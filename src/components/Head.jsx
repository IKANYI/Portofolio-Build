import { Link } from "react-router-dom";
import "./Head.css";

function Head() {
  return (
    <div className="header">
      <div className="links">
        <Link to="/"></Link>
        <h1>
          <Link to="/Blogs">Blog</Link>
        </h1>
        <h1>
          <Link to="/works">Works</Link>
        </h1>
        <h1>
          <Link to="/contact">Contact</Link>
        </h1>
      </div>
    </div>
  );
}
export default Head;
