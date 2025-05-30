import cppLogo from "../assets/img/C++ logo.png";
import javaLogo from "../assets/img/Java logo.png";
import pythonLogo from "../assets/img/Python logo.png";
import htmlLogo from "../assets/img/HTML logo.png";
import cssLogo from "../assets/img/CSS Logo.png";
import reactLogo from "../assets/img/React Logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "React", img: reactLogo },
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "C++", img: cppLogo },
    { name: "Java", img: javaLogo },
    { name: "Python", img: pythonLogo },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As an aspiring web developer, I have a strong foundation in tools like React, HTML, CSS, and basic JS. <br />
                I also have a strong foundation in SDE skills like C++, Java, and Python.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={skill.name} style={{ width: "100px", height: "100px" }} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
