import React from 'react'
import './App.css'

export default function Header() {
  
  return (
    <>
      <nav>
        <div>Movies<span id="lg-ct">Verse</span></div>
        <ul className="Navlist">
          <li><a href="#">Home</a></li>
          <li>
            <a href="#" id="ct">Categories</a>
          </li>
          <li><a href="#">languages</a></li>
          <li><a href="#">Quality</a></li>
        </ul>
       
        <div>
          <button>Bollywood</button>
          <button>Hollywood</button>
        </div>
      </nav>
    </>
  )
}



