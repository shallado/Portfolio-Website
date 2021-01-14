import { useState } from 'react';
import Modal from 'react-modal';
import IconExit from '../svg/IconExit';
import IconRightArrow from '../svg/IconRightArrow';
import IconRightArrowBox from '../svg/IconRightArrowBox';

Modal.setAppElement('#root');

function ProjectInfo() {
  const [modelIsOpen] = useState(true);

  return (
    <Modal
      isOpen={modelIsOpen}
      overlayClassName="modal-overlay"
      className="project-info"
    >
      <div className="project-info__exit-icon-container">
        <IconExit />
      </div>
      <div className="project-info__heading-container">
        <h3 className="heading-three heading-three--project-info">VGL App</h3>
      </div>
      <div className="project-info__content">
        <div className="project-info__description-container">
          <h4 className="heading-four">Description:</h4>
          <p className="project-info__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            dolores labore explicabo, quisquam, a vero maxime modi similique
            laboriosam temporibus sit amet eos dolore ex eum, expedita sapiente
            eius perferendis?
          </p>
        </div>
        <div className="project-info__features-container">
          <h4 className="heading-four">Features:</h4>
          <ul className="project-info__features">
            <li>
              <IconRightArrow />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <IconRightArrow />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <IconRightArrow />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <IconRightArrow />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
        <div className="project-info__technologies-container">
          <ul className="project-info__technologies">
            <li>Javascript</li>
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="project-info__examples-container">
          <div className="project-info__example-links">
            <div className="project-info__example-link-container">
              <IconRightArrowBox />
              <a
                href="https://www.vgl-app.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-info__example-link"
              >
                Demo
              </a>
            </div>
            <div className="project-info__example-link-container">
              <IconRightArrowBox />
              <a
                href="https://github.com/shallado/Video-Game-Logic-App"
                target="_blank"
                rel="noopener noreferrer"
                className="project-info__example-link"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project-info__example-video-container">
            Video Walk Through of Application
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectInfo;
