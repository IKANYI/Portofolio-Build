import { Link } from "react-router-dom";
import "./Head.css";
function Head() {
  return (
    <div className="header">
      <div className="links">
      
      <Link to="/"></Link>
      <Link to="/Blogs">Blog</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
      
      </div>
    </div>
  );
}
export default Head;
