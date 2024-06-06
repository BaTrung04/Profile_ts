import trungLogo from "@/assets/img/about/2.jpg";
import myCV from "@/assets/CV Nguyễn Bá Trung.pdf";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div className="arlo_tm_section relative" id="about">
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
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner" data-img-url={trungLogo}></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
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
                    Hi! My name is <strong>Alan Michaelis</strong>. I am a Web
                    Developer, and I'm very passionate and dedicated to my work.
                    With 20 years experience as a professional Web developer, I
                    have acquired the skills and knowledge necessary to make
                    your project a success. I enjoy every step of the design
                    process, from discussion and collaboration to concept and
                    execution, but I find the most satisfaction in seeing the
                    finished product do everything for you that it was created
                    to do.
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
                        <label>Tuổi:</label> 22
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Thành phố:</label> Hà nội
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Sở thích:</label> Xem phim, nghe nhạc
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
                        <label>Degree:</label> Master
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Website:</label>{" "}
                        <a href="#">www.mywebsite.com</a>
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
                    <li>
                      <span>
                        <label>Twitter:</label> <a href="#">&#64;myusername</a>
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
