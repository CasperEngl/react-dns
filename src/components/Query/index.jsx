import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

const WebsiteQuery = ({ domain }) => {
  if (!domain) {
    return null;
  }

  return (
    <ButtonGroup className="mb-4">
      <Button href={`http://dnskit.dk/${domain}`} target="_blank" color="primary">DnsKit</Button>
      <Button href={`https://podio.com/web-konceptdk/web-koncept-crm/apps/5994353/search#/query/${domain}`} target="_blank" color="primary">Podio</Button>
    </ButtonGroup>
  );
};

WebsiteQuery.propTypes = {
  domain: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  query: state.query.query,
});

export default connect(mapStateToProps)(WebsiteQuery);
