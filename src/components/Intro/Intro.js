import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                  I'm <span className="introName">Shreya Patel</span>
                  <br />
                  Web Developer
                  <p className="introPara">
                        I am a skilled web designer with experience in creating <br/>
                        visual appealling and user-friendly websites.
                  </p>
                  <Link>
                        <button className="btn">
                              <img className="btnImg" src={btnImg} alt="Hire Me" />
                              Hire Me
                        </button>
                  </Link>
            </span>
      </div>
      {/* <img src={bg} alt="" className="bg"/> */}
    </section>
  )
}

export default Intro
