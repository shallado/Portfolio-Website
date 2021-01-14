import ProjectInfo from '../modals/ProjectInfo';
import project from '../img/project.png';

function WorkPage() {
  return (
    <>
      <div className="work">
        <h2 className="heading-two">Work</h2>
        <div className="projects">
          <div>
            <div className="projects__project-img-container">
              <img
                className="projects__project-img"
                src={project}
                alt="project 1"
              />
            </div>
            <h3 className="heading-three">Project 1</h3>
          </div>
          <div>
            <div className="projects__project-img-container">
              <img
                className="projects__project-img"
                src={project}
                alt="project 2"
              />
            </div>
            <h3 className="heading-three">Project 2</h3>
          </div>
          <div>
            <div className="projects__project-img-container">
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
      <ProjectInfo />
    </>
  );
}

export default WorkPage;
