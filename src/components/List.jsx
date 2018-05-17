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

class List extends PureComponent {
  static propTypes = {
    getDNS: PropTypes.func.isRequired,
    dns: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]).isRequired,
  }

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
    const query = this.props.query;
    if (!dns)
      return (null);

    const {
      ptr,
      soa,
      a,
      ns,
      cname,
      mx,
      txt,
      srv,
    } = dns;

    return (
      <Fragment>
        <h2 className="pb-2 mt-0 mb-3 border-bottom">{query.toUpperCase()}</h2>
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

const mapStateToProps = state => ({
  dns: state.dns.data,
  query: state.dns.data.query,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getDNS,
  resetDNS,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

/*
<Record record={a} name="A" />
<Record record={cname} name="CNAME" />
<Record record={srv} name="SRV" />
<Record record={soa} name="SOA" />
<Record record={ns} name="NS" />
<Record record={mx} name="MX" />
<Record record={txt} name="TXT" />
*/