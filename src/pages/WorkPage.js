import { useState } from 'react';
import ProjectInfo from '../modals/ProjectInfo';
import IconRightArrowRound from '../svg/IconRightArrowRound';
import project from '../img/project.png';

function WorkPage() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectNum, setProjectNum] = useState(0);

  function openModal(projectNum) {
    setProjectNum(projectNum);
    setIsOpen(true);
  }

  function closeModal() {
    setProjectNum(0);
    setIsOpen(false);
  }

  return (
    <>
      <div className="work">
        <h2 className="heading-two">Work</h2>
        <div className="projects">
          <div>
            <div
              onClick={() => openModal(1)}
              className="projects__project-img-container"
            >
              <div className="projects__project-img-overlay">
                <IconRightArrowRound />
              </div>
              <img
                className="projects__project-img"
                src={project}
                alt="project 1"
              />
            </div>
            <h3 className="heading-three">Project 1</h3>
          </div>
          <div>
            <div
              onClick={() => openModal(2)}
              className="projects__project-img-container"
            >
              <div className="projects__project-img-overlay">
                <IconRightArrowRound />
              </div>
              <img
                className="projects__project-img"
                src={project}
                alt="project 2"
              />
            </div>
            <h3 className="heading-three">Project 2</h3>
          </div>
          <div>
            <div
              onClick={() => openModal(3)}
              className="projects__project-img-container"
            >
              <div className="projects__project-img-overlay">
                <IconRightArrowRound />
              </div>
              <img
                className="projects__project-img"
                src={project}
                alt="project 3"
              />
            </div>
            <h3 className="heading-three">Project 3</h3>
          </div>
        </div>
      </div>
      <ProjectInfo
        projectNum={projectNum}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default WorkPage;
