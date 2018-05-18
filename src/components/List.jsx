/*
eslint

no-shadow: 0,
*/

import React, { PureComponent, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';

import { getDNS, resetDNS } from '../actions/dnsActions';
import Record from './Record';
import PTR from './PTR';
import GhostDNS from './GhostDNS';

class List extends PureComponent {
  componentDidMount() {
    const { getDNS, match } = this.props;
    const { dns } = this.props.dns;
    const query = (dns !== undefined) ? this.props.dns.query : 'google.com';

    if (match.params.domain) {
      getDNS(match.params.domain);
    } else {
      getDNS(query);
    }
  }

  componentWillUnmount() {
    const { resetDNS } = this.props;

    resetDNS();
  }

  render() {
    const { dns } = this.props.dns;

    if (!dns) {
      return <GhostDNS />;
    }

    const {
      ptr, soa, a, ns, cname, mx, txt, srv,
    } = dns;

    return (
      <Fragment>
        <PTR address={ptr} />
        <Row>
          <Record record={soa} name="SOA" />
          <Record record={a} name="A" />
          <Record record={ns} name="NS" />
          <Record record={cname} name="CNAME" />
          <Record record={mx} name="MX" />
          <Record record={txt} name="TXT" />
          <Record record={srv} name="SRV" />
        </Row>
      </Fragment>
    );
  }
}

List.propTypes = {
  getDNS: PropTypes.func.isRequired,
  resetDNS: PropTypes.func.isRequired,
  dns: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = state => ({
  dns: state.dns.data,
  query: state.dns.query,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getDNS,
  resetDNS,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
