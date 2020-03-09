import React from 'react';
import Modal from 'react-modal';
import './TedModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.defaultStyles.overlay.backgroundColor = 'black';

class TedModal extends React.Component {
  render() {
    const { hit, showModal } = this.props;
    return (
      <Modal
        isOpen={showModal}
        onRequestClose={this.handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="tedModalContainer">
          <div className="tedModalImageContainer">
            <img src={hit.image_url} width={'100%'} />
          </div>
          <div className="tedModalContent">
            <div style={{ float: 'right' }}>
              <button onClick={this.props.handleCloseModal}>close</button>
            </div>
            <h1 className="content">{hit.name}</h1>
            <p className="content">{hit.description}</p>
            <p className="content"><span><strong>Speakers: </strong></span> {`${hit.speakers.join(', ')}`}</p>
          </div>
        </div>
      </Modal>
    );
  }
}

TedModal.propTypes = {
  showModal: false,
  hit: {},
  handleCloseModal() {},
};

export default TedModal;
