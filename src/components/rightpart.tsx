import About from "./content/about";
import Contact from "./content/contact";
import HomeCV from "./content/homecv";
import Project from "./content/project";
import Skill from "./content/skill";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (Value: boolean) => void;
}
const RightPart = (props: IProps) => {
  return (
    <>
      <div
        className={
          props.hideLeftPart === true
            ? "arlo_tm_rightpart opened"
            : "arlo_tm_rightpart"
        }
      >
        <div className="rightpart_inner">
          <HomeCV />

          {/* <!-- ABOUT --> */}
          <About />
          {/* <!-- /ABOUT --> */}

          {/* <!-- SKILLS --> */}
          <Skill />
          {/* <!-- /SKILLS --> */}

          {/* <!-- SERVICES --> */}
          <Project />
          {/* <!-- /SERVICES --> */}

          {/* <!-- CONTACT & FOOTER --> */}
          <Contact />
          {/* <!-- /CONTACT & FOOTER --> */}
        </div>
      </div>
    </>
  );
};

export default RightPart;
