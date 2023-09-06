import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footerBrand">
        <img src="cloudNotesIcon.png" width="60" height="40" className="d-inline-block align-top" alt="NoteWave"/>
        <span className='footerTitle'>NoteWave</span>
        <span className="copyright">
          Copyright &#169; 2022 NoteWave
        </span>
      </div>

      <div className="contactIcons">
        <a href="https://github.com/MDSUHAIL78?tab=repositories">
          <i className="contactIcon fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohd-suhail-5a4370200/">
          <i className="contactIcon fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/MdSuhail54800">
          <i className="contactIcon fa-brands fa-twitter"></i>
        </a>
      </div>
      
    </div>
  )
}

export default Footer
