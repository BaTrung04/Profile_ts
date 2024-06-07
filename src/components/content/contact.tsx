const Contact = () => {
  return (
    <div className="arlo_tm_section" id="contact" style={{}}>
      <div className="container">
        <div
          className="arlo_tm_title_holder contact"
          //style={{ paddingTop: 200, paddingBottom: 200 }}
        >
          <h3>Contact Me</h3>
          <span>Get in touch with me</span>
        </div>
      </div>
      <div className="arlo_tm_footer_contact_wrapper_all">
        <div className="arlo_tm_contact_wrap_all">
          <div className="container">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder contact">
                <h4>Thông tin liên hệ</h4>
              </div>
              <div className="short_info_wrap">
                <ul>
                  <li>
                    <p>
                      <label>Email:</label>
                      <span>
                        <a href="mailto:example@gmail.com">
                          trungmkzxc12345@gmail.com
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Github:</label>
                      <span>
                        <a href="https://github.com/BaTrung04?tab=repositories">
                          https://github.com/BaTrung04
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightbox">
              <div className="arlo_tm_contact_wrap">
                <div className="main_input_wrap">
                  <div style={{ height: 200 }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_footer_wrap">
          <div className="container">
            <p>&copy; Copyright 2024by BT. All Rights are Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
