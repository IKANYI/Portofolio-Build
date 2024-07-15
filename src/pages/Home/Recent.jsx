import React from 'react'
import '../main.css'

function Recent() {
  return (
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
  )
}

export default Recent