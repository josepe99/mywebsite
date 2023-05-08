import { MY_NAME } from "../constants";
import Image from "next/image";

const Header = () => {
  const linkedinUrl = "https://www.linkedin.com/in/jos%C3%A9-cardozo-367bab158/";
  const instagramUrl = "https://www.instagram.com/lil_josepe/";
  const facebookUrl = "https://www.facebook.com/josepe999/";
  const twitterUrl = "https://twitter.com/JosePe199";
  const githubUrl = "https://github.com/josepe99";
  const profilePhotoSize = 100;

  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <Image
            className="img-fluid rounded-circle"
            src="/static/img/profile-img.jpg"
            width={profilePhotoSize}
            height={profilePhotoSize}
            alt=""
          />
          <h1 className="text-light"><a href="index.html">{ MY_NAME }</a></h1>
          <div className="social-links mt-3 text-center">
            <a href={twitterUrl} className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href={facebookUrl} className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href={instagramUrl} className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href={githubUrl} className="github"><i className="bx bxl-github"></i></a>
            <a href={linkedinUrl} className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Skills</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
      </div>
    </header>
    // <!-- End Header -->
  )
}

export default Header;