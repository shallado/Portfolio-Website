import { useState } from 'react';
import Modal from 'react-modal';
import IconExit from '../svg/IconExit';

Modal.setAppElement('#root');

function ProjectInfo() {
  const [modelIsOpen] = useState(true);

  return (
    <Modal
      isOpen={modelIsOpen}
      overlayClassName="modal-overlay"
      className="project-info"
    >
      <div className="project-info__content">
        <IconExit />
        <h3 className="heading-three">VGL App</h3>
        <h4>Description:</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolores
          labore explicabo, quisquam, a vero maxime modi similique laboriosam
          temporibus sit amet eos dolore ex eum, expedita sapiente eius
          perferendis?
        </p>
        <h4>Features:</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
        <div>
          <div>Video Walk Through of Application</div>
          <div>
            <a
              href="https://wwww.vgl-app.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href="https://github.com/shallado/Video-Game-Logic-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectInfo;
