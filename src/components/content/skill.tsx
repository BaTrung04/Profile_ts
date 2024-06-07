import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <div
      className="arlo_tm_section"
      id="skills"
      style={{ paddingBottom: 100, paddingTop: 100 }}
    >
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Kỹ năng Frontend</h4>
              </div>
              <li>Cắt giao diện UX/UI</li>
              <li>Phân tích xử lý luồng </li>
              <li>Framework/Library: ReactJs, AntDesign, Redux,...</li>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">HTML/CSS/JavaScript</span>
                      <span className="number">99%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={99}
                        bgColor={"#333"}
                        height={"8px"}
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">ReactJS(TypeScript)</span>
                      <span className="number">95%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={"#333"}
                        height={"8px"}
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">Design UI/UX</span>
                      <span className="number">99%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={99}
                        bgColor={"#333"}
                        height={"8px"}
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Kỹ năng Backend</h4>
              </div>
              <li>Ngôn ngữ lập trình: JavaScript, C#, Java </li>
              <li>Viết Restful APIs </li>
              <li>Framework/Library: Express, ASP.net</li>
              <li>Database: MySQL(SQLsever), NoSQl(MongoDB) </li>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">Express</span>
                      <span className="number">76%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={76}
                        bgColor={"#333"}
                        height={"8px"}
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label"> ASP.net</span>
                      <span className="number">75%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={75}
                        bgColor={"#333"}
                        height={"8px"}
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">
                        Database: MySQL(SQLsever), NoSQl(MongoDB)
                      </span>
                      <span className="number">95%</span>
                    </span>
                    <div className="arlo_tm_bar_bg">
                      <ProgressBar
                        completed={95}
                        bgColor={"#333"}
                        height={"8px"}
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
