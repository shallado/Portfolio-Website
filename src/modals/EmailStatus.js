import Modal from 'react-modal';

Modal.setAppElement('#root');

function EmailStatus({ emailStatus, resetEmailStatus }) {
  function closeModal() {
    resetEmailStatus();
  }

  return (
    <Modal
      isOpen={!!emailStatus}
      overlayClassName="modal-overlay"
      className="email-status"
    >
      <p className="email-status__message">{emailStatus}</p>
      <button onClick={closeModal} className="btn btn--email-status">
        ok
      </button>
    </Modal>
  );
}

export default EmailStatus;
