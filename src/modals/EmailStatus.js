import Modal from 'react-modal';

Modal.setAppElement('#root');

function EmailStatus({ emailStatus, resetEmailStatus }) {
  function closeModal() {
    resetEmailStatus();
  }

  return (
    <Modal
      isOpen={!!emailStatus}
      overlayClassName="email-status__overlay"
      className="email-status"
    >
      <div className="email-status__message-container">
        <p className="email-status__message">{emailStatus}</p>
        <button onClick={closeModal} className="btn btn--email-status">
          ok
        </button>
      </div>
    </Modal>
  );
}

export default EmailStatus;
