import { useState } from 'react';
import ProjectInfo from '../modals/ProjectInfo';
import project from '../img/project.png';

function WorkPage() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="work">
        <h2 className="heading-two">Work</h2>
        <div className="projects">
          <div>
            <div
              onClick={openModal}
              className="projects__project-img-container"
            >
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
              onClick={openModal}
              className="projects__project-img-container"
            >
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
              onClick={openModal}
              className="projects__project-img-container"
            >
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
      <ProjectInfo modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
}

export default WorkPage;
