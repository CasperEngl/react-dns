/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

class ExternalModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault();

    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const { header, url, buttonLabel } = this.props;

    const StyledModal = styled(Modal)`
      width: 90%;
      max-width: 1200px;
      background: white;
      border-radius: 20px;
    `;

    return (
      <Fragment>
        <Button href={url} color="primary" onClick={this.toggle}>{buttonLabel}</Button>
        <StyledModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{header.toUpperCase()}</ModalHeader>
          <ModalBody>
            <iframe
              src={url}
              title={url}
              frameBorder="0"
              width="100%"
              height="800"
              className="bg-white"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </StyledModal>
      </Fragment>
    );
  }
}

export default ExternalModal;
