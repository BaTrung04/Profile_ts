import desktopLogo from "@/assets/img/logo/React_Logo_SVG.svg";
import { useEffect, useState } from "react";
import { Value } from "sass";
import { isMobile } from "react-device-detect";
interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (Value: boolean) => void;
}
const LeftPart = (props: IProps) => {
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const tab = hash.replace("#", "");
      setActiveTab(tab);
      const section = document.querySelector(`${hash}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);
  const handleClickTab = (
    tab: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = tab;
      }, 1000);
    }
  };
  return (
    <>
      {" "}
      <div
        className={
          props.hideLeftPart === true
            ? "arlo_tm_leftpart_wrap opened"
            : "arlo_tm_leftpart_wrap"
        }
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={activeTab === "home" ? "active" : " "}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("home", e)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab === "about" ? "active" : " "}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("about", e)}
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab === "skills" ? "active" : " "}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("skills", e)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className={activeTab === "project" ? "active" : " "}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("project", e)}
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab === "contact" ? "active" : " "}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("contact", e)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile && (
            <a
              className={
                props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
              }
              href="#"
              onClick={(e) => {
                e.preventDefault();
                props.setHideLeftPart(!props.hideLeftPart);
              }}
            >
              <i
                className={
                  props.hideLeftPart
                    ? "xcon-angle-left opened"
                    : "xcon-angle-left"
                }
              ></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default LeftPart;
