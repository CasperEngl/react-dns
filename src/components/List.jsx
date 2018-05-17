/*
eslint

no-shadow: 0,
*/

import React, { PureComponent, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import { getDNS, resetDNS } from '../actions/dnsActions';
import Record from './Record';
import PTR from './PTR';
import SkeletonTable from './SkeletonTable';

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

    if (!dns)
      return (
        <SkeletonTheme color="#252525" highlightColor="#282828">
          <Row>
            <Col xs={3}>
              <h3>
                <Skeleton duration={2} />
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h2>
                <Skeleton duration={2} count={2} />
              </h2>
            </Col>
          </Row>
          <div className="mb-5" />

          <SkeletonTable />
          <SkeletonTable />
          <SkeletonTable />
          <SkeletonTable />
          <SkeletonTable />
        </SkeletonTheme>
      )

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
  query: state.dns.query,
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