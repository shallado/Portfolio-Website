import Modal from 'react-modal';
import ProjectOneContent from '../components/ProjectOneContent';
import IconExit from '../svg/IconExit';

Modal.setAppElement('#root');

function ProjectInfo({ modalIsOpen, closeModal, projectNum }) {
  let projectContent;

  if (projectNum === 1) {
    projectContent = <ProjectOneContent />;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      overlayClassName="modal-overlay"
      className="project-info"
    >
      <div className="project-info__exit-icon-container">
        <div onClick={closeModal}>
          <IconExit />
        </div>
      </div>
      {projectContent}
    </Modal>
  );
}

export default ProjectInfo;
