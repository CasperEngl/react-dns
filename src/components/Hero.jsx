/*
eslint

no-shadow: 0,
*/

import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Jumbotron, FormGroup, Input } from 'reactstrap';

import { getDNS, resetDNS } from '../actions/dnsActions';

class Hero extends PureComponent {
  static defaultProps = {
    dns: [],
  }

  static propTypes = {
    getDNS: PropTypes.func.isRequired,
    dns: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
  }

  handleSearch(event) {
    if (event.key === 'Enter') {
      const { getDNS, resetDNS } = this.props;
      const { value } = event.target;

      this.props.history.push(value);

      resetDNS();
      getDNS(value);
    }
  }

  render() {
    const { query } = this.props.dns;

    return (
      <Jumbotron>
        <Container>
          <h1>DNS</h1>
          <FormGroup>
            <Input
              type="text"
              placeholder="Søg"
              id="search"
              defaultValue={query}
              onKeyPress={event => this.handleSearch(event)}
              autoFocus
            />
          </FormGroup>
        </Container>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  dns: state.dns.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getDNS,
  resetDNS,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hero));
