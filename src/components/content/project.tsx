import { Button, Descriptions, Modal } from "antd";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

interface IDataProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    Descriptions: string;
    Frontend: string;
    Backend: string;
    demo: string;
    member: number;
    github: string;
  };
}
const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IDataProject | null>(null);

  const dataProjects: IDataProject[] = [
    {
      image: <FaReact size={50} color="#3a6ddb" />,
      title: "Website Clone Tiki",
      shortDescription: ` Web design is a similar process of creation, with the intention of presenting the content on electronic pages...`,
      detail: {
        Descriptions: "",
        Frontend: "",
        Backend: "",
        demo: "",
        member: 1,
        github: "",
      },
    },
    {
      image: <FaReact size={50} color="#3a6ddb" />,
      title: "Website Clone Tiki",
      shortDescription: ` Web design is a similar process of creation, with the intention of presenting the content on electronic pages...`,
      detail: {
        Descriptions: "asdasd",
        Frontend: "asdasd",
        Backend: "sssssssssssssssssssss",
        demo: "234234",
        member: 1,
        github: "rtrungfasss",
      },
    },
    {
      image: <FaReact size={50} color="#3a6ddb" />,
      title: "Website Clone Tiki",
      shortDescription: ` Web design is a similar process of creation, with the intention of presenting the content on electronic pages...`,
      detail: {
        Descriptions: "",
        Frontend: "",
        Backend: "",
        demo: "",
        member: 1,
        github: "",
      },
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };
  return (
    <>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự án ${dataDetail.title} ` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Descriptions: {dataDetail.detail.Descriptions}</li>
            <li>Frontend: {dataDetail.detail.Frontend}</li>
            <li>Backend: {dataDetail.detail.Backend}</li>
            <li>demo: {dataDetail.detail.demo}</li>
            <li>member: {dataDetail.detail.member}</li>
            <li>github: {dataDetail.detail.github}</li>
          </ul>
        )}
      </Modal>
      <div
        className="arlo_tm_section"
        id="project"
        style={{ paddingBottom: 100, paddingTop: 100 }}
      >
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Project</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li>
                      <div
                        className="inner"
                        title="Xem chi tiết"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item), setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5px 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; Xem chi tiết
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
