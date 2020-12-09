import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about-me'>
      <h1>I build and design full stack applications.</h1>
      <p>Hi, I'm Mark Marcello a full stack JavaScript developer with a background in Physical Therapy and Carpentry.</p>
      <p>Coming from the great state of New York, I have always aspired to create a positive impact on the world. 
        My journey started by learning carpentry and then taking that craftsmanship into a new world as a certified 
        Physical therapist Assistant. I used this position to create positive impact directly in each of my client's by promoting
        a transition to a pain free life. 
        While I still thoroughly enjoy helping people invdividually, I am now focused on promoting this work on a larger scale.
      </p>
      <p>As a graduate of <a href='https://www.thinkful.com/' target="_blank">Thinkful's</a> Software Engineering Immersion Program, I am happy to announce that I am ready to start my journey 
        as a professional developer. Over the course of this intensive program, I have worked with numerous amazing developers and have built some 
        amazing <Link to='/projects'>projects!</Link>
      </p>
      <p>
        I am excited to continue to building my professional network, and to collaborate with like-minded teams, and developers. 
        If you would like to work with me of this journey or would like some free lance work done, please feel free to <Link to='/contact'>Contact me!</Link>
      </p>
    </div>
  )
}

export default About


/*
About section:

demonstrates passion for web development and the desire to work on a team with great programmers
demonstrates your personality outside of coding

*/