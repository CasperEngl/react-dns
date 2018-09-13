/*
eslint

no-shadow: 0,
*/

import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Jumbotron, FormGroup, Input } from 'reactstrap';
import validator from 'validator';

import { changeQuery } from '../../actions/queryActions';
import { getDNS, resetDNS } from '../../actions/dnsActions';

class Hero extends PureComponent {
  static propTypes = {
    changeQuery: PropTypes.func.isRequired,
    getDNS: PropTypes.func.isRequired,
    resetDNS: PropTypes.func.isRequired,
    queryString: PropTypes.string.isRequired,
  }

  handleQuery(event) {
    const { changeQuery, resetDNS, getDNS } = this.props;
    const value = event.target.value.replace(/https|http|(:\/\/)|www\.|\/([^/]*).*$/gi, '');

    changeQuery(value);

    if (validator.isURL(value)) {
      resetDNS(value);
      getDNS(value);
    }
  }

  render() {
    const { queryString } = this.props;

    return (
      <Jumbotron>
        <Container>
          <h1>DNS</h1>
          <FormGroup>
            <Input
              type="text"
              placeholder="Søg"
              id="search"
              value={queryString}
              onChange={event => this.handleQuery(event)}
              autoFocus
            />
          </FormGroup>
        </Container>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  queryString: state.query.query,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeQuery,
  getDNS,
  resetDNS,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
