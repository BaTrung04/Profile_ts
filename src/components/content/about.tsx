import trungLogo from "@/assets/img/about/2.jpg";
import myCV from "@/assets/CV Nguyễn Bá Trung.pdf";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import logo550 from "@/assets/img/about/550x640.jpg";
const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);
  return (
    <div
      className="arlo_tm_section relative"
      id="about"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Về tác giả</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  ref={sceneEl}
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img src={logo550} alt="550x640" />
                    <div
                      className="inner"
                      data-img-url={trungLogo}
                      style={{ backgroundImage: `url(${trungLogo})` }}
                    ></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src={logo550} alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    Hi there.. I'm a{" "}
                    <TypeAnimation
                      sequence={[
                        // wait 1s before replacing "Mice" with "Hamsters"
                        "Freelancer",
                        2000,
                        "UI/UX Designer",
                        2000,
                        "Web Developer",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      //style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Xin chào, mình là Nguyễn Bá Trung <strong></strong>.
                    <br></br>
                    Muốn trở thành một Web Developer
                    <br></br>
                    Muốn được thử thách cũng như phát triển bản thân trong môi
                    trường doanh nghiệp
                    <br></br>
                    Học hỏi thêm kiếm thức , kĩ năng, giao tiếp,.. tạo ra giá
                    trị cho môi trường doanh nghiệp
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Ngày sinh:</label> 04-10-2002
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Trường học:</label> Trường Đại Học Công Nghiệp Hà
                        Nội
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Sở thích:</label> Xem phim, nghe nhạc
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Github:</label>{" "}
                        <a href="https://github.com/BaTrung04">
                          https://github.com/BaTrung04
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Mail:</label>{" "}
                        <a href="mailto:example@gmail.com">
                          Trungmkzxc12345&#64;gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Phone:</label> <a href="#">+84 099 999 09 09</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={myCV} download={myCV}>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
