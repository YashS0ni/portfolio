import meter11 from "../assets/img/meter11.svg";
import meter13 from "../assets/img/meter13.svg";
import meter14 from "../assets/img/meter14.svg";
import meter15 from "../assets/img/meter15.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are some of my relevent Skills</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                        
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Image" />
                                <h5>NODE JS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
